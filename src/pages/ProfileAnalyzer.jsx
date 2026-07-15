import { useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import Toast from "../components/Toast";

function ProfileAnalyzer() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (!profile.trim()) return;

    setLoading(true);

    // Dummy AI response (replace with fetch later)
    setTimeout(() => {
      setResult({
        score: "8/10",
        strengths: [
          "Strong technical skills",
          "Clear profile introduction",
        ],
        weaknesses: [
          "Portfolio link is missing",
          "Experience section can be improved",
        ],
        suggestions: [
          "Add your best projects",
          "Use more keywords related to your skills",
        ],
      });

      setLoading(false);
      setToastMessage("Profile analysis complete");
      setToastType("success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700">
          Profile Analyzer
        </h1>

        <p className="mt-3 text-gray-600">
          Paste your Fiverr/Upwork profile URL or describe your skills,
          experience, projects, and services to receive AI-powered feedback.
        </p>

        <textarea
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder="Paste your Fiverr/Upwork profile URL or describe your profile..."
          className="w-full mt-6 p-4 border rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {profile.trim() === "" && (
          <p className="text-red-500 mt-2 text-sm">
            Profile description cannot be empty.
          </p>
        )}

        <button
          onClick={handleAnalyze}
          disabled={profile.trim() === ""}
          className="mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Analyze Profile
        </button>

        {loading && (
          <div className="mt-8 text-center">
            <Spinner />
            <p className="mt-3 text-blue-700 font-medium">
              Analyzing profile...
            </p>
          </div>
        )}

        {!loading && result && (
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <Card>
              <h2 className="text-xl font-bold text-gray-800">
                ⭐ Score
              </h2>
              <p className="text-3xl font-bold mt-3">
                {result.score}
              </p>
            </Card>

            <Card>
              <h2 className="text-xl font-bold text-gray-800">
                ✅ What is Good
              </h2>
              <ul className="list-disc ml-5 mt-3 space-y-2">
                {result.strengths.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-xl font-bold text-gray-800">
                ❌ What to Improve
              </h2>
              <ul className="list-disc ml-5 mt-3 space-y-2">
                {result.weaknesses.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-xl font-bold text-gray-800">
                💡 Suggestions
              </h2>
              <ul className="list-disc ml-5 mt-3 space-y-2">
                {result.suggestions.map((item, index) => (
                  <li key={index}>{item}</li>
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