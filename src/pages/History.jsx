import { useEffect, useState, useCallback } from "react";
import { FileText } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Skeleton from "../components/Skeleton";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";


function History() {

  const navigate = useNavigate();
  const { user } = useAuth();


  const [history, setHistory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);



  // Fetch History
  const loadHistory = useCallback(async () => {

    if (!user) return;


    setLoading(true);


    const { data, error } = await supabase
      .from("history")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false });



    if (error) {

      toast.error(error.message);
      setLoading(false);
      return;

    }



    setHistory(data || []);
    setLoading(false);


  }, [user]);





  useEffect(() => {

    loadHistory();

  }, [loadHistory]);





  const handleDelete = async (id) => {


    const { error } = await supabase
      .from("history")
      .delete()
      .eq("id", id);



    if (error) {

      toast.error(error.message);
      return;

    }



    setHistory((prev) =>
      prev.filter((item) => item.id !== id)
    );



    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }



    toast.success("History deleted successfully");

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
            onClick={()=>navigate("/dashboard")}
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

                    {item.type}

                  </span>




                  <p className="text-sm text-gray-400 mt-3">

                    {
                      new Date(item.date)
                      .toLocaleString()
                    }

                  </p>





                  <p className="
                    mt-3
                    text-gray-700
                    line-clamp-3
                  ">

                    {
                      item.content?.substring(0,150)
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
                    onClick={()=>
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
                    onClick={()=>
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








      {/* Modal */}



      <Modal

        isOpen={Boolean(selectedItem)}

        onClose={()=>
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

            onClick={()=>{

              navigator.clipboard.writeText(
                selectedItem?.content || ""
              );

              toast.success(
                "Copied to clipboard"
              );

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