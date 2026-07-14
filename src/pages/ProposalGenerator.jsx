import { useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import Toast from "../components/Toast";

function ProposalGenerator() {
  const [jobPost, setJobPost] = useState("");
  const [proposal, setProposal] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (jobPost.trim() === "") {
      setToastMessage("Job description cannot be empty.");
      setToastType("error");
      return;
    }
    setLoading(true);
    // Simulate async generation
    setTimeout(() => {
      setProposal(`Dear Client,

I am excited to apply for your project. I have experience in React, JavaScript, Tailwind CSS, and responsive web development.

I can deliver high-quality work on time and would love to discuss your project further.

Best Regards.`);
      setLoading(false);
      setToastMessage("Proposal generated");
      setToastType("success");
    }, 2000);
  };

  const copyProposal = () => {
    navigator.clipboard.writeText(proposal);
    setToastMessage("Proposal copied!");
    setToastType("success");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-blue-700">
          Proposal Generator
        </h1>

        <textarea
          value={jobPost}
          onChange={(e) => setJobPost(e.target.value)}
          placeholder="Paste job post here..."
          className="w-full mt-6 h-44 border rounded-lg p-4"
        />

        <button
          onClick={handleGenerate}
          disabled={loading || jobPost.trim() === ""}
          className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate Proposal
        </button>

        {loading && (
          <div className="mt-8 text-center">
            <Spinner />
            <p className="mt-3 text-blue-700 font-medium">Generating proposal...</p>
          </div>
        )}
        {proposal && (
          <Card className="mt-8">
            <h2 className="text-xl font-bold mb-4">Generated Proposal</h2>
            <p className="whitespace-pre-line text-gray-700">{proposal}</p>
            <button
              onClick={copyProposal}
              className="mt-5 bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Copy Proposal
            </button>
          </Card>
        )}
        {toastMessage && (
          <Toast message={toastMessage} type={toastType} onClose={() => setToastMessage("")} />
        )}

      </div>
    </div>
  );
}

export default ProposalGenerator;