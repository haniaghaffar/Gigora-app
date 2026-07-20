import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

function History() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

const initialHistory = [

    {
      id: 1,
      type: "Proposal",
      date: "20 Jul 2026",
      content:
        "Hello, I am an experienced React developer with expertise in building responsive web applications. I would love to work on your project and deliver high-quality results within the deadline.",
    },
    {
      id: 2,
      type: "SEO",
      date: "19 Jul 2026",
      content:
        "Optimized Fiverr gig title with high-ranking keywords, improved description, and SEO tags for better visibility.",
    },
    {
      id: 3,
      type: "Profile",
      date: "18 Jul 2026",
      content:
        "Profile analysis completed. Improve your headline, portfolio, and add more client-focused descriptions.",
    },
  ];
  const [history, setHistory] = useState(initialHistory);

const handleDelete = (id) => {
  setHistory((prev) =>
    prev.filter((item) => item.id !== id)
  );

  if (selectedItem?.id === id) {
    setSelectedItem(null);
  }
};

  return (
    <div className="p-6 md:p-8 space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          History
        </h1>

        <p className="text-gray-600 mt-2">
          View all your AI generated content.
        </p>
      </div>

      {history.length === 0 ? (
        <Card className="text-center py-12">

          <div className="text-6xl mb-4">📄</div>

          <h2 className="text-xl font-semibold text-gray-800">
            No History Yet
          </h2>

          <p className="text-gray-500 mt-2">
            Start generating proposals or SEO content.
          </p>

          <Button
  className="mt-6"
  onClick={() => navigate("/dashboard")}
>
  Start Generating
</Button>

        </Card>
      ) : (

        <div className="space-y-4">

          {history.map((item) => (

            <Card
              key={item.id}
              className="border border-gray-200"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>

                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.type}
                  </span>

                  <p className="text-sm text-gray-500 mt-2">
                    {item.date}
                  </p>

                  <p className="text-gray-700 mt-3">
                    {item.content.slice(0, 100)}...
                  </p>

                </div>

                <div className="flex gap-3">

                  <Button
                    onClick={() => setSelectedItem(item)}
                  >
                    View
                  </Button>

                  <Button
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

      <Modal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.type}
      >
        <div className="space-y-4">

  <p className="text-gray-700 whitespace-pre-line">
    {selectedItem?.content}
  </p>

  <Button
    onClick={() =>
      navigator.clipboard.writeText(selectedItem?.content || "")
    }
  >
    Copy
  </Button>

</div>
      </Modal>

    </div>
  );
}

export default History;