import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Skeleton from "../components/Skeleton";
import Toast from "../components/Toast";
import { useNavigate } from "react-router-dom";
import { getHistory, deleteHistory } from "../services/api";

function History() {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const [toast, setToast] = useState({
    message: "",
    type: "success",
  });


  useEffect(() => {
    loadHistory();
  }, []);


  useEffect(() => {
    if (toast.message) {
      const timer = setTimeout(() => {
        setToast({
          message: "",
          type: "success",
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast]);


  const loadHistory = async () => {
    try {
      setLoading(true);

      const data = await getHistory();

      setHistory(
        Array.isArray(data)
          ? data.slice(0, 20)
          : []
      );

    } catch (error) {
      setToast({
        message: "Failed to load history.",
        type: "error",
      });

    } finally {
      setLoading(false);
    }
  };


  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this history item?"
    );

    if (!confirmDelete) return;


    try {

      await deleteHistory(id);


      setHistory((prev) =>
        prev.filter(
          (item) => item.id !== id
        )
      );


      if(selectedItem?.id === id){
        setSelectedItem(null);
      }


      setToast({
        message: "History deleted successfully.",
        type: "success",
      });


    } catch (err) {
  console.log("History Error:", err);

  setToast({
    message: "Failed to load history.",
    type: "error",
  });
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



      {/* Empty */}

      {!loading && history.length === 0 && (

        <Card className="text-center py-12">

          <div className="text-6xl">
            📜
          </div>


          <h2 className="text-xl font-semibold mt-4">
            No History Found
          </h2>


          <p className="text-gray-500 mt-2">
            Generate your first AI result to see it here.
          </p>


          <Button
            className="mt-6"
            onClick={() =>
              navigate("/dashboard")
            }
          >
            Start Generating
          </Button>


        </Card>

      )}



      {/* History List */}

      {!loading && history.length > 0 && (

        <div className="space-y-5">


          {history.map((item)=>(

            <Card
              key={item.id}
              className="
              border border-gray-200
              hover:shadow-md
              transition
              "
            >


              <div className="
              flex
              flex-col
              md:flex-row
              md:justify-between
              gap-5
              ">


                <div className="flex-1">


                  <span
                  className="
                  inline-flex
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  bg-blue-100
                  text-blue-700
                  "
                  >
                    {item.type || "AI Result"}
                  </span>



                  <p className="
                  text-sm
                  text-gray-400
                  mt-3
                  ">
                    {item.date 
                    ? new Date(item.date)
                    .toLocaleString()
                    :"Recently"}
                  </p>



                  <p className="
                  mt-3
                  text-gray-700
                  line-clamp-3
                  ">
                    {
                      item.content
                      ? item.content.substring(0,150)
                      : "No content available"
                    }
                    ...
                  </p>


                </div>



                <div className="
                flex
                gap-3
                items-center
                ">


                  <Button
                    onClick={() =>
                      setSelectedItem(item)
                    }
                  >
                    View
                  </Button>



                  <Button
                    className="
                    bg-red-600
                    hover:bg-red-700
                    "
                    onClick={() =>
                      handleDelete(item.id)
                    }
                  >
                    Delete
                  </Button>


                </div>


              </div>


            </Card>

          ))}


        </div>

      )}




      {/* Detail Modal */}

      <Modal

        isOpen={
          Boolean(selectedItem)
        }

        onClose={() =>
          setSelectedItem(null)
        }

        title={
          selectedItem?.type ||
          "History Details"
        }

      >

        <div className="space-y-5">


          <p className="
          text-gray-700
          whitespace-pre-line
          max-h-96
          overflow-y-auto
          ">
            {selectedItem?.content}
          </p>



          <Button

          onClick={() => {

            navigator.clipboard.writeText(
              selectedItem?.content || ""
            );


            setToast({
              message:"Copied to clipboard.",
              type:"success"
            });

          }}

          >
            Copy Content
          </Button>


        </div>


      </Modal>




      <Toast

        message={toast.message}

        type={toast.type}

        onClose={() =>
          setToast({
            message:"",
            type:"success"
          })
        }

      />


    </div>

  );
}


export default History;