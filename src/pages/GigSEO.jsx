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
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-blue-700">
          Gig SEO Optimizer
        </h1>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Gig Title"
          className="w-full border rounded-lg p-3 mt-6"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Gig Description"
          className="w-full border rounded-lg p-4 mt-5 h-40"
        />

          <button
            onClick={() => {
              if (title.trim() === "" || description.trim() === "") {
                setToastMessage("Please fill in both title and description.");
                setToastType("error");
                return;
              }
              setLoading(true);
              handleOptimize();
            }}
            disabled={title.trim() === "" || description.trim() === ""}
            className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Optimize
          </button>

        {loading && (
            <div className="mt-8 text-center">
              <Spinner />
              <p className="mt-3 text-blue-700 font-medium">Optimizing...</p>
            </div>
          )}
          {result && (
            <Card className="mt-8">
              <h2 className="font-bold text-xl mb-4">Optimized Version</h2>
              <p><strong>Title:</strong> {result.title}</p>
              <p className="mt-4"><strong>Description:</strong><br />{result.description}</p>
              <div className="mt-5"><strong>Keywords</strong>
                <div className="flex flex-wrap gap-3 mt-3">
                  {result.keywords.map((keyword) => (
                    <span key={keyword} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{keyword}</span>
                  ))}
                </div>
              </div>
            </Card>
          )}

      </div>
      {toastMessage && <Toast message={toastMessage} type={toastType} onClose={() => setToastMessage("")} />}
    </div>
  );
}

export default GigSEO;