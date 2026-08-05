from datetime import datetime, date
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Any, Dict, List, Optional
from uuid import uuid4
import os
from dotenv import load_dotenv

try:
    from supabase import create_client
except ImportError:
    create_client = None

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv("SUPABASE_ANON_KEY")

supabase = None
if create_client and SUPABASE_URL and SUPABASE_KEY:
    supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

app = FastAPI(title="Gigora Backend")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if os.getenv("DEV_ALLOW_ALL", "true").lower() == "true" else ["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

history_store: List[Dict[str, Any]] = []
usage_store: Dict[str, Dict[str, Any]] = {}
subscriptions_store: Dict[str, Dict[str, Any]] = {}

DEFAULT_USER_ID = "demo-user"


def get_user_id(request: Request) -> str:
    # This backend currently supports anonymous demo users.
    return DEFAULT_USER_ID


class SeoPayload(BaseModel):
    title: str
    description: str


class ProposalPayload(BaseModel):
    jobPost: str
    tone: Optional[str] = "Professional"
    skill: Optional[str] = "Freelance"
    platform: Optional[str] = "Fiverr"


class ProfilePayload(BaseModel):
    profile: str


class HistoryPayload(BaseModel):
    type: str
    input: Dict[str, Any]
    output: Dict[str, Any]
    user_id: Optional[str] = None


class SubscriptionPayload(BaseModel):
    planId: str


@app.get("/api/health")
async def health_check():
    return {"status": "ok", "supabase": bool(supabase)}


@app.post("/api/ai/seo")
async def optimize_seo(payload: SeoPayload):
    title_score = min(100, max(50, int((len(payload.title) / 80) * 100)))
    description_score = min(100, max(50, int((len(payload.description) / 250) * 100)))
    keywords = list({
        word.strip(".,!?") for word in (payload.title + " " + payload.description).lower().split()
        if len(word) > 3
    })[:6]

    optimized_title = payload.title
    if len(optimized_title) < 70:
        optimized_title = f"{optimized_title} | High-Converting Gig"

    optimized_description = (
        payload.description
        if payload.description.endswith(".")
        else payload.description + "."
    )
    optimized_description += "\n\nThis gig is optimized for clarity, skill focus, and search visibility."

    response = {
        "seoScore": {
            "title": title_score,
            "tags": min(100, max(50, len(keywords) * 12)),
            "description": description_score,
        },
        "optimizedTitle": optimized_title,
        "optimizedDescription": optimized_description,
        "suggestedTags": [
            {"tag": keyword, "valid": True} for keyword in keywords
        ],
    }
    return response


@app.post("/api/ai/proposal")
async def generate_proposal(payload: ProposalPayload):
    proposal = (
        f"Hello! I am an experienced {payload.skill} specialist ready to help you with this project. "
        f"Based on your {payload.platform} requirements, I will deliver a polished, client-focused proposal that highlights your strengths. "
        f"I can complete the work on time with attention to detail, strong communication, and high-quality results."
    )

    key_points = [
        f"Expertise in {payload.skill}",
        f"Professional {payload.platform} delivery", 
        f"Client-first communication",
    ]
    if payload.tone:
        key_points.insert(0, f"Tone: {payload.tone}")

    return {"proposal": proposal, "keyPoints": key_points}


@app.post("/api/ai/profile")
async def analyze_profile(payload: ProfilePayload):
    profile_text = payload.profile.strip()
    score = min(100, max(45, 50 + len(profile_text) // 15))

    strengths = [
        "Clear skill focus",
        "Strong client orientation",
        "Relevant project examples",
    ]
    weaknesses = [
        "Add more measurable results",
        "Use clearer service outcomes",
        "Showcase recent achievements",
    ]
    suggestions = [
        "Highlight your top niche skills.",
        "Include specific results from past projects.",
        "Use a clear call to action for buyers.",
    ]

    return {
        "score": score,
        "strengths": strengths,
        "weaknesses": weaknesses,
        "suggestions": suggestions,
    }


def insert_history_record(record: Dict[str, Any]):
    if supabase:
        payload = {**record, "created_at": datetime.utcnow().isoformat()}
        result = supabase.table("history").insert(payload).execute()
        if result.error:
            raise HTTPException(status_code=500, detail=result.error.message)
        return result.data

    history_store.append(record)
    return record


@app.post("/api/history")
async def save_history(payload: HistoryPayload, request: Request):
    user_id = payload.user_id or get_user_id(request)
    record = {
        "id": str(uuid4()),
        "type": payload.type,
        "input": payload.input,
        "output": payload.output,
        "user_id": user_id,
        "created_at": datetime.utcnow().isoformat(),
    }
    saved = insert_history_record(record)
    return {"success": True, "record": saved}


@app.get("/api/history")
async def get_history(request: Request, user_id: Optional[str] = None):
    user_id = user_id or get_user_id(request)
    if supabase:
        result = supabase.table("history").select("*").eq("user_id", user_id).order("created_at", desc=True).limit(100).execute()
        if result.error:
            raise HTTPException(status_code=500, detail=result.error.message)
        return result.data

    return [record for record in history_store if record.get("user_id") == user_id]


@app.get("/api/usage")
async def get_usage(request: Request, user_id: Optional[str] = None):
    user_id = user_id or get_user_id(request)
    today = date.today().isoformat()

    if supabase:
        result = supabase.table("user_usage").select("*").eq("user_id", user_id).eq("date", today).single().execute()
        if result.error and result.error.code != "PGRST116":
            raise HTTPException(status_code=500, detail=result.error.message)
        return result.data or {"daily_count": 0, "date": today, "user_id": user_id}

    usage = usage_store.get(user_id, {}).get(today, {"daily_count": 0, "date": today, "user_id": user_id})
    return usage


@app.post("/api/subscriptions")
async def subscribe_plan(payload: SubscriptionPayload, request: Request):
    user_id = get_user_id(request)
    subscription = {
        "id": str(uuid4()),
        "planId": payload.planId,
        "status": "active",
        "created_at": datetime.utcnow().isoformat(),
    }
    subscriptions_store[user_id] = subscription
    return subscription


@app.get("/api/subscriptions")
async def list_subscriptions(request: Request):
    user_id = get_user_id(request)
    subscription = subscriptions_store.get(user_id)
    return [subscription] if subscription else []


@app.delete("/api/subscriptions")
async def cancel_subscription(request: Request):
    user_id = get_user_id(request)
    if user_id not in subscriptions_store:
        raise HTTPException(status_code=404, detail="No subscription found")
    del subscriptions_store[user_id]
    return {"success": True}


@app.delete("/api/subscriptions/{subscription_id}")
async def cancel_subscription_by_id(subscription_id: str, request: Request):
    user_id = get_user_id(request)
    if user_id not in subscriptions_store or subscriptions_store[user_id]["id"] != subscription_id:
        raise HTTPException(status_code=404, detail="Subscription not found")
    del subscriptions_store[user_id]
    return {"success": True}
