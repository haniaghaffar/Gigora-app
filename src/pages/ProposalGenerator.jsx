import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";
import Toast from "../components/Toast";
import { generateProposal } from "../services/api";

function ProposalGenerator() {
  const [jobPost, setJobPost] = useState("");
  const [proposal, setProposal] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const [tone, setTone] = useState("Professional");
  const [skill, setSkill] = useState("");
  const [platform, setPlatform] = useState("Fiverr");

  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Frontend Development",
    "UI/UX Design",
    "Node.js",
  ];

  const showToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
  };

  const generateAIProposal = async () => {
    const cleanJobPost = jobPost.trim();

    if (!cleanJobPost) {
      setError("Job description cannot be empty.");
      showToast("Please enter a job description.", "error");
      return;
    }

    if (cleanJobPost.length < 30) {
      setError("Job description must be at least 30 characters.");
      showToast("Job description is too short.", "error");
      return;
    }

    setError("");
    setLoading(true);
    setProposal(null);

    try {
      const response = await generateProposal({
        jobPost: cleanJobPost,
        tone,
        skill,
        platform,
      });

      setProposal(response);
      showToast("Proposal generated successfully!", "success");
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

  const copyProposal = async () => {
    if (!proposal) return;

    await navigator.clipboard.writeText(proposal.proposal);

    showToast("Proposal copied!", "success");
  };

  const downloadProposal = () => {
    if (!proposal) return;

    const blob = new Blob([proposal.proposal], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Gigora_Proposal.txt";
    link.click();

    URL.revokeObjectURL(url);

    showToast("Proposal downloaded!", "success");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Proposal Generator
          </h1>

          <p className="mt-3 text-gray-600">
            Generate AI powered proposals customized for freelance projects.
          </p>
        </div>

        {/* Form */}

        <Card className="shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Project Details
          </h2>

          <textarea
            value={jobPost}
            onChange={(e) => setJobPost(e.target.value)}
            placeholder="Paste job description here..."
            className="w-full h-44 border border-gray-300 rounded-xl p-4 bg-white text-black placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          {/* Tone */}

          <div className="mt-6">
            <label className="font-medium text-gray-700">
              Proposal Tone
            </label>

            <div className="flex flex-wrap gap-3 mt-3">
              {["Professional", "Friendly", "Confident"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTone(item)}
                  className={`px-4 py-2 rounded-full border transition ${
                    tone === item
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Skill */}

          <div className="mt-6">
            <label className="font-medium text-gray-700">
              Select Skill
            </label>

            <select
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-lg p-3 bg-white text-black"
            >
              <option value="">Choose skill</option>

              {skills.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Platform */}
                    <div className="mt-6">
            <label className="font-medium text-gray-700">
              Platform
            </label>

            <div className="flex gap-3 mt-3">
              {["Fiverr", "Upwork"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPlatform(item)}
                  className={`px-5 py-2 rounded-lg border transition ${
                    platform === item
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="mt-5 p-4 rounded-lg bg-red-50 border border-red-300">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          <Button
            className="mt-6 h-12 w-full md:w-auto"
            onClick={generateAIProposal}
            disabled={loading || !jobPost.trim()}
          >
            {loading ? "Generating..." : "Generate Proposal"}
          </Button>
        </Card>

        {/* Loading */}
        {loading && (
          <div className="space-y-6">
            <Skeleton className="h-40" />
            <Skeleton className="h-64" />
          </div>
        )}

        {/* Result */}
        {!loading && proposal && (
          <Card className="shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Generated Proposal
              </h2>

              <div className="flex flex-wrap gap-3">
                <Button onClick={copyProposal}>
                  Copy
                </Button>

                <Button onClick={downloadProposal}>
                  Download .txt
                </Button>
              </div>
            </div>

            <p className="mt-6 whitespace-pre-line text-gray-700 leading-7">
              {proposal.proposal}
            </p>

            <div className="mt-8">
              <h3 className="font-bold text-gray-900">
                Extracted Key Points
              </h3>

              <div className="flex flex-wrap gap-3 mt-4">
                {proposal.keyPoints?.map((point, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button
                className="h-12"
                onClick={generateAIProposal}
                disabled={loading}
              >
                {loading ? "Generating..." : "Regenerate"}
              </Button>
            </div>
          </Card>
        )}

        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setToastMessage("")}
        />
      </div>
    </div>
  );
}

export default ProposalGenerator;