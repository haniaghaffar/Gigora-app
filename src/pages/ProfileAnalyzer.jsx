import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";
import Toast from "../components/Toast";
import { analyzeProfile } from "../services/api";
import { supabase } from "../services/supabase";
import { useAuth } from "../context/AuthContext";

function ProfileAnalyzer() {
  const { user } = useAuth();

  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const [result, setResult] = useState(null);

  const showToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
  };

  const saveHistory = async (content) => {
    if (!user) return;

    try {
      await supabase.from("history").insert([
        {
          user_id: user.id,
          type: "Profile",
          content,
        },
      ]);
    } catch (err) {
      console.log("History save skipped:", err.message);
    }
  };

  const handleAnalyze = async () => {
    const cleanProfile = profile.trim();

    if (!cleanProfile) {
      setError("Profile description cannot be empty.");
      showToast("Please enter your profile.", "error");
      return;
    }

    if (cleanProfile.length < 30) {
      setError("Profile description must be at least 30 characters.");
      showToast("Profile description is too short.", "error");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const response = await analyzeProfile({
        profile: cleanProfile,
      });

      setResult(response);

      await saveHistory(
        response.suggestions?.join("\n") ||
          response.strengths?.join("\n") ||
          "Profile analysis completed successfully."
      );

      showToast("Profile analyzed successfully.", "success");
    } catch (err) {
      const status = err?.response?.status;

      if (status === 401) {
        showToast("Please login first.", "error");
      } else if (status === 403) {
        showToast("Daily free limit reached.", "error");
      } else if (status === 429) {
        showToast("Too many requests. Please wait.", "error");
      } else {
        showToast("Something went wrong.", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            AI Profile Analyzer
          </h1>

          <p className="mt-3 text-gray-600 max-w-3xl">
            Paste your freelancer profile description and let AI analyze
            your strengths, weaknesses, profile score and improvement
            suggestions.
          </p>
        </div>

        {/* Input */}

        <Card className="shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Profile Information
          </h2>

          <textarea
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            placeholder="Paste your Fiverr / Upwork profile or describe your skills..."
            className="w-full h-44 rounded-xl border border-gray-300 p-4 text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          {error && (
            <div className="mt-4 rounded-lg border border-red-300 bg-red-50 p-3">
              <p className="text-red-600 text-sm font-medium">
                {error}
              </p>
            </div>
          )}

          <Button
            className="mt-6 h-12 w-full md:w-auto"
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Profile"}
          </Button>
        </Card>

        {/* Loading */}

        {loading && (
          <div className="space-y-6">
            <Skeleton className="h-32" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Skeleton className="h-56" />
              <Skeleton className="h-56" />
              <Skeleton className="h-56" />
              <Skeleton className="h-56" />
            </div>
          </div>
        )}

        {/* Results */}

        {!loading && result && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Score */}

            <Card className="shadow-lg">
              <h2 className="text-xl font-bold text-gray-900">
                ⭐ Profile Score
              </h2>

              <div className="mt-5 flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-700">
                    {result.score}/10
                  </span>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold">
                    AI Analysis
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    AI analyzed your profile and generated suggestions.
                  </p>
                </div>
              </div>
            </Card>

            {/* Strengths */}

            <Card className="shadow-lg">
              <h2 className="text-xl font-bold text-green-700 mb-4">
                ✅ What is Good
              </h2>

              <ul className="space-y-3">
                {result.strengths?.map((item, index) => (
                  <li
                    key={index}
                    className="bg-green-50 border border-green-200 rounded-lg p-3 text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Weaknesses */}

            <Card className="shadow-lg">
              <h2 className="text-xl font-bold text-red-600 mb-4">
                ❌ What to Improve
              </h2>

              <ul className="space-y-3">
                {result.weaknesses?.map((item, index) => (
                  <li
                    key={index}
                    className="bg-red-50 border border-red-200 rounded-lg p-3 text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Suggestions */}

            <Card className="shadow-lg">
              <h2 className="text-xl font-bold text-blue-700 mb-4">
                💡 AI Suggestions
              </h2>

              <ul className="space-y-3">
                {result.suggestions?.map((item, index) => (
                  <li
                    key={index}
                    className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

          </div>
        )}

      </div>

      <Toast
        message={toastMessage}
        type={toastType}
        onClose={() => setToastMessage("")}
      />
    </div>
  );
}

export default ProfileAnalyzer;