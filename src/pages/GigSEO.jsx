import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";
import Toast from "../components/Toast";
import { optimizeSEO } from "../services/api";
import { supabase } from "../services/supabase";
import { useAuth } from "../context/AuthContext";

function GigSEO() {
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [error, setError] = useState("");

  const TITLE_LIMIT = 80;

  const showToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Copied successfully!");
    } catch {
      showToast("Failed to copy.", "error");
    }
  };

  const saveHistory = async (content) => {
    if (!user) return;

    try {
      await supabase.from("history").insert([
        {
          user_id: user.id,
          type: "SEO",
          content,
        },
      ]);
    } catch (err) {
      console.log("History save skipped:", err.message);
    }
  };

  const handleOptimize = async () => {
    const cleanTitle = title.trim();
    const cleanDescription = description.trim();

    if (!cleanTitle || !cleanDescription) {
      setError("Please enter both title and description.");
      showToast("Please fill all fields.", "error");
      return;
    }

    if (cleanTitle.length < 10) {
      setError("Title must be at least 10 characters.");
      showToast("Title is too short.", "error");
      return;
    }

    if (cleanDescription.length < 30) {
      setError("Description must be at least 30 characters.");
      showToast("Description is too short.", "error");
      return;
    }

    if (cleanTitle.length > TITLE_LIMIT) {
      setError("Title exceeds 80 characters.");
      showToast("Title exceeds 80 characters.", "error");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const response = await optimizeSEO({
        title: cleanTitle,
        description: cleanDescription,
      });

      setResult(response);

      await saveHistory(
        response.optimizedDescription ||
        response.optimizedTitle ||
        "SEO Optimization Completed"
      );

      showToast("Gig optimized successfully!");
    } catch (err) {
      console.log(err);

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
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header */}

        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">
            Gig SEO Optimizer
          </h1>

          <p className="mt-3 text-lg text-gray-600 max-w-3xl">
            Improve your Fiverr & Upwork gig using AI-powered SEO suggestions,
            optimized titles, descriptions and keyword recommendations.
          </p>
        </div>

        {/* Input Form */}

        <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8">

          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Gig Information
          </h2>

          <div className="mb-6">

            <label className="block text-gray-700 font-semibold mb-2">
              Gig Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. I will build a responsive React website"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none"
            />

            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">
                Recommended: 60–80 characters
              </span>

              <span
                className={`text-sm font-semibold ${
                  title.length > TITLE_LIMIT
                    ? "text-red-500"
                    : "text-blue-600"
                }`}
              >
                {title.length}/{TITLE_LIMIT}
              </span>
            </div>

          </div>

          <div>

            <label className="block text-gray-700 font-semibold mb-2">
              Gig Description
            </label>

            <textarea
              rows={8}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your services, skills and experience..."
              className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none"
            />

          </div>

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          <Button
            onClick={handleOptimize}
            disabled={loading}
            className="mt-8 w-full md:w-auto"
          >
            {loading ? "Optimizing..." : "Optimize Gig"}
          </Button>

        </Card>

        {/* Loading */}

        {loading && (
          <div className="space-y-6">
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-72 rounded-xl" />
          </div>
        )}

        {/* Results */}

        {!loading && result && (

          <div className="space-y-6">

            <Card className="p-8">

              <h2 className="text-2xl font-bold mb-6">
                SEO Score
              </h2>

              {[
                {
                  label: "Title",
                  score: result?.seoScore?.title || 0,
                  color: "bg-blue-600",
                },
                {
                  label: "Tags",
                  score: result?.seoScore?.tags || 0,
                  color: "bg-green-600",
                },
                {
                  label: "Description",
                  score: result?.seoScore?.description || 0,
                  color: "bg-purple-600",
                },
              ].map((item) => (

                <div key={item.label} className="mb-5">

                  <div className="flex justify-between mb-2">
                    <span>{item.label}</span>
                    <span>{item.score}%</span>
                  </div>

                  <div className="h-3 bg-gray-200 rounded-full">

                    <div
                      className={`${item.color} h-3 rounded-full`}
                      style={{
                        width: `${item.score}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </Card>

            <Card className="p-8">

              <div className="flex justify-between">

                <h2 className="text-2xl font-bold">
                  Optimized Title
                </h2>

                <Button
                  onClick={() =>
                    copyText(result?.optimizedTitle || "")
                  }
                >
                  Copy
                </Button>

              </div>

              <p className="mt-5">
                {result?.optimizedTitle}
              </p>

            </Card>

            <Card className="p-8">

              <div className="flex justify-between">

                <h2 className="text-2xl font-bold">
                  Optimized Description
                </h2>

                <Button
                  onClick={() =>
                    copyText(result?.optimizedDescription || "")
                  }
                >
                  Copy
                </Button>

              </div>

              <p className="mt-5 whitespace-pre-line leading-8">
                {result?.optimizedDescription}
              </p>

            </Card>

            <Card className="p-8">

              <div className="flex justify-between">

                <h2 className="text-2xl font-bold">
                  Suggested Keywords
                </h2>

                <Button
                  onClick={() =>
                    copyText(
                      result?.suggestedTags
                        ?.map((item) => item.tag)
                        .join(", ") || ""
                    )
                  }
                >
                  Copy
                </Button>

              </div>

              <div className="flex flex-wrap gap-3 mt-6">

                {result?.suggestedTags?.map((tag, index) => (

                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full ${
                      tag.valid
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {tag.tag}
                  </span>

                ))}

              </div>

            </Card>

            <div className="flex justify-end">

              <Button
                onClick={handleOptimize}
                disabled={loading}
              >
                {loading ? "Regenerating..." : "Regenerate"}
              </Button>

            </div>

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

export default GigSEO;