import { useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import Toast from "../components/Toast";

function GigSEO() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [result, setResult] = useState(null);

  const handleOptimize = () => {
    setLoading(true);
    setResult(null);

    // Dummy AI response (replace with API later)
    setTimeout(() => {
      setResult({
        title: "Professional React Developer | Modern Responsive Websites",
        description:
          "I build fast, responsive, and modern React websites with clean UI and optimized performance.",
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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700">
          Gig SEO Optimizer
        </h1>

        <p className="mt-3 text-gray-600">
          Improve your gig title, description, and keywords with AI-powered SEO
          suggestions.
        </p>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your gig title..."
          className="w-full border rounded-lg p-3 mt-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your gig description..."
          className="w-full border rounded-lg p-4 mt-5 h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={() => {
            if (!title.trim() || !description.trim()) {
              setToastMessage("Please fill in both title and description.");
              setToastType("error");
              return;
            }

            handleOptimize();
          }}
          disabled={!title.trim() || !description.trim()}
          className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Optimize
        </button>

        {loading && (
          <div className="mt-10 text-center">
            <Spinner />

            <p className="mt-4 text-blue-700 font-semibold">
              Optimizing your gig...
            </p>

            <p className="text-sm text-gray-500 mt-2">
              AI is analyzing your title and description. Please wait a moment.
            </p>
          </div>
        )}

        {!loading && result && (
          <Card className="mt-8">
            <h2 className="text-2xl font-bold mb-6">
              Optimized Version
            </h2>

            <p>
              <strong>Optimized Title:</strong>
            </p>

            <p className="mt-2 text-gray-700">
              {result.title}
            </p>

            <p className="mt-6">
              <strong>Optimized Description:</strong>
            </p>

            <p className="mt-2 text-gray-700">
              {result.description}
            </p>

            <div className="mt-6">
              <strong>Recommended Keywords</strong>

              <div className="flex flex-wrap gap-3 mt-3">
                {result.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        )}
      </div>

      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setToastMessage("")}
        />
      )}
    </div>
  );
}

export default GigSEO;