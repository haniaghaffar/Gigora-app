import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";
import Toast from "../components/Toast";

function GigSEO() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [error, setError] = useState("");

  const TITLE_LIMIT = 80;

  const handleOptimize = () => {
    if (!title.trim() || !description.trim()) {
      setError("Please enter both title and description.");
      return;
    }

    if (title.length > TITLE_LIMIT) {
      setError("Title exceeds 80 characters.");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setResult({
        title:
          "Professional React Developer | Modern Responsive Websites",

        description:
          "I build fast, responsive and SEO optimized React websites using Tailwind CSS, JavaScript and modern UI practices.",

        keywords: [
          "React",
          "JavaScript",
          "Tailwind CSS",
          "Frontend",
          "Responsive Design",
        ],
      });

      setLoading(false);

      setToastMessage("Gig optimized successfully!");
      setToastType("success");

    }, 2000);
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);

    setToastMessage("Copied successfully!");
    setToastType("success");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">

      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header */}

        <div>

          <h1 className="text-4xl font-bold text-gray-900">
            Gig SEO Optimizer
          </h1>

          <p className="mt-3 text-gray-600">
            Optimize your Fiverr or Upwork gig using AI powered SEO
            suggestions.
          </p>

        </div>

        {/* Form */}

        <Card className="shadow-lg">

          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Gig Information
          </h2>

          {/* Title */}

          <label className="font-medium text-gray-700">
            Gig Title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter gig title..."
            className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />

          <div className="flex justify-end mt-2">

            <span
              className={`text-sm ${
                title.length > TITLE_LIMIT
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              {title.length}/{TITLE_LIMIT}
            </span>

          </div>

          {/* Description */}

          <label className="font-medium text-gray-700 mt-6 block">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Describe your gig..."
            className="w-full mt-2 h-44 border rounded-lg p-4 resize-none focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />

          {/* Error */}

          {error && (

            <div className="mt-4 bg-red-50 border border-red-300 rounded-lg p-3">

              <p className="text-red-600 text-sm">
                {error}
              </p>

            </div>

          )}

          <Button
            className="mt-6 h-12 w-full md:w-auto"
            onClick={handleOptimize}
            disabled={loading}
          >
            Optimize Gig
          </Button>

        </Card>

        {/* Loading */}

        {loading && (

          <div className="space-y-6">

            <Skeleton className="h-32" />

            <Skeleton className="h-72" />

          </div>

        )}
                {/* Result */}

        {!loading && result && (

          <div className="space-y-6">

            {/* SEO Score */}

            <Card className="shadow-lg">

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                SEO Score
              </h2>

              {/* Title */}

              <div className="mb-5">

                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">
                    Title
                  </span>

                  <span className="text-blue-600 font-semibold">
                    90%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: "90%" }}
                  />
                </div>

              </div>

              {/* Tags */}

              <div className="mb-5">

                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">
                    Tags
                  </span>

                  <span className="text-green-600 font-semibold">
                    85%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-600 h-3 rounded-full"
                    style={{ width: "85%" }}
                  />
                </div>

              </div>

              {/* Description */}

              <div>

                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">
                    Description
                  </span>

                  <span className="text-purple-600 font-semibold">
                    92%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-purple-600 h-3 rounded-full"
                    style={{ width: "92%" }}
                  />
                </div>

              </div>

            </Card>

            {/* Optimized Title */}

            <Card className="shadow-lg">

              <div className="flex justify-between items-center">

                <h2 className="text-xl font-bold text-gray-900">
                  Optimized Title
                </h2>

                <Button
                  onClick={() => copyText(result.title)}
                >
                  Copy
                </Button>

              </div>

              <p className="mt-4 text-gray-700">
                {result.title}
              </p>

            </Card>

            {/* Description */}

            <Card className="shadow-lg">

              <div className="flex justify-between items-center">

                <h2 className="text-xl font-bold text-gray-900">
                  Optimized Description
                </h2>

                <Button
                  onClick={() =>
                    copyText(result.description)
                  }
                >
                  Copy
                </Button>

              </div>

              <p className="mt-4 text-gray-700 leading-7">
                {result.description}
              </p>

            </Card>

            {/* SEO Tags */}

            <Card className="shadow-lg">

              <div className="flex justify-between items-center">

                <h2 className="text-xl font-bold text-gray-900">
                  SEO Tags
                </h2>

                <Button
                  onClick={() =>
                    copyText(result.keywords.join(", "))
                  }
                >
                  Copy
                </Button>

              </div>

              <div className="flex flex-wrap gap-3 mt-5">

                {result.keywords.map((tag, index) => (

                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      tag.length > 15
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </Card>

            {/* Regenerate */}

            <div className="flex justify-end">

              <Button
                className="h-12"
                onClick={handleOptimize}
              >
                Regenerate
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