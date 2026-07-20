import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton";
import Toast from "../components/Toast";
import useCopyToast from "../hooks/useCopyToast";

function Profile() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { copyToClipboard, toastMessage, toastType, setToastMessage } = useCopyToast();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 md:p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <Skeleton className="h-12 w-48" />
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-40" />
        </div>
      </div>
    );
  }

  if (!user) {
    // If not logged in, redirect to login
    navigate("/login");
    return null;
  }

  const fullName = user.user_metadata?.full_name || "Freelancer";
  const email = user.email || "";
  const plan = user.user_metadata?.plan || "Free";
  const joinDate = user.created_at ? new Date(user.created_at).toLocaleDateString() : "";

  const handleCopyEmail = () => {
    copyToClipboard(email, "Email copied!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <Card className="shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Name</p>
              <p className="text-lg font-medium text-gray-800">{fullName}</p>
            </div>
            <div>
              <p className="text-gray-600 flex items-center">
                Email
                <button
                  onClick={handleCopyEmail}
                  className="ml-2 text-blue-600 hover:underline"
                >
                  Copy
                </button>
              </p>
              <p className="text-lg font-medium text-gray-800">{email}</p>
            </div>
            <div>
              <p className="text-gray-600">Plan</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  plan.toLowerCase() === "pro"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {plan}
              </span>
            </div>
            <div>
              <p className="text-gray-600">Join Date</p>
              <p className="text-lg font-medium text-gray-800">{joinDate}</p>
            </div>
 </div>
        </Card>
      </div>
      <Toast
        message={toastMessage}
        type={toastType}
        onClose={() => setToastMessage("")}
      />
    </div>
  );
}

export default Profile;
