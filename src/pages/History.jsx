import { useEffect, useState, useCallback } from "react";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Card from "../components/Card";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Skeleton from "../components/Skeleton";

import { supabase } from "../services/supabase";
import { useAuth } from "../context/AuthContext";

function History() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const demoHistory = [
    {
      id: "demo-1",
      type: "Profile",
      created_at: new Date().toISOString(),
      content:
        "Profile analysis completed successfully. AI reviewed your freelancer profile and suggested measurable achievements, stronger keywords and improved communication.",
    },
    {
      id: "demo-2",
      type: "SEO",
      created_at: new Date(Date.now() - 86400000).toISOString(),
      content:
        "SEO optimization completed. Optimized title, description and keyword recommendations generated for better search visibility.",
    },
    {
      id: "demo-3",
      type: "Proposal",
      created_at: new Date(Date.now() - 172800000).toISOString(),
      content:
        "Proposal generated for a React Frontend project including responsive design, API integration and clean UI implementation.",
    },
  ];

  const loadHistory = useCallback(async () => {
    setLoading(true);

    try {
      if (!user) {
        setHistory(demoHistory);
        return;
      }

      const { data, error } = await supabase
        .from("history")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;

      const formattedHistory = (data || []).map((item) => ({
        ...item,
        content:
          item.content ||
          item.output?.proposal ||
          item.output?.optimizedDescription ||
          JSON.stringify(item.output ?? {}, null, 2),
      }));

      setHistory(
        formattedHistory.length > 0
          ? formattedHistory
          : demoHistory
      );
    } catch (err) {
      console.error(err);
      toast.error("Unable to load history. Showing demo data.");
      setHistory(demoHistory);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const handleDelete = async (id) => {
    try {
      if (String(id).startsWith("demo-")) {
        setHistory((prev) =>
          prev.filter((item) => item.id !== id)
        );

        if (selectedItem?.id === id) {
          setSelectedItem(null);
        }

        toast.success("History deleted successfully.");
        return;
      }

      const { error } = await supabase
        .from("history")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setHistory((prev) =>
        prev.filter((item) => item.id !== id)
      );

      if (selectedItem?.id === id) {
        setSelectedItem(null);
      }

      toast.success("History deleted successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Unable to delete history.");
    }
  };
    return (
    <div className="p-6 md:p-8 space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Activity History
        </h1>

        <p className="text-gray-500 mt-2">
          Track your previous AI generated content.
        </p>
      </div>

      {/* Loading */}

      {loading && (
        <div className="space-y-4">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
      )}

      {/* Empty State */}

      {!loading && history.length === 0 && (
        <Card className="text-center py-12">

          <div className="flex justify-center">
            <FileText
              size={48}
              className="text-gray-400"
            />
          </div>

          <h2 className="text-xl font-semibold mt-4">
            No History Found
          </h2>

          <p className="text-gray-500 mt-2">
            Generate your first AI result to see it here.
          </p>

          <Button
            className="mt-6"
            onClick={() => navigate("/dashboard")}
          >
            Start Generating
          </Button>

        </Card>
      )}

      {/* History List */}

      {!loading && history.length > 0 && (

        <div className="space-y-5">

          {history.map((item) => (

            <Card
              key={item.id}
              className="border border-gray-200 hover:shadow-md transition"
            >

              <div className="flex flex-col md:flex-row md:justify-between gap-5">

                <div className="flex-1">

                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                    {item.type}
                  </span>

                  <p className="text-sm text-gray-400 mt-3">
                    {item.created_at || item.date
                      ? new Date(item.created_at || item.date).toLocaleString()
                      : "No Date"}
                  </p>

                  <p className="mt-3 text-gray-700 line-clamp-3">
                    {String(item.content || "")
                      .substring(0, 150)
                      .concat(
                        String(item.content || "").length > 150 ? "..." : ""
                      )}
                  </p>

                </div>

                <div className="flex gap-3 items-center">

                  <Button
                    onClick={() => setSelectedItem(item)}
                  >
                    View
                  </Button>

                  <Button
                    className="bg-red-600 hover:bg-red-700"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>

                </div>

              </div>

            </Card>

          ))}

        </div>

      )}

      {/* Modal */}

      <Modal
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.type || "History Details"}
      >

        <div className="space-y-5">

          <p className="text-gray-700 whitespace-pre-line max-h-96 overflow-y-auto">
            {selectedItem?.content || "No content available."}
          </p>

          <Button
            onClick={() => {
              navigator.clipboard.writeText(selectedItem?.content || "");
              toast.success("Copied to clipboard");
            }}
          >
            Copy Content
          </Button>

        </div>

      </Modal>

    </div>
  );
}

export default History;