import React, { useState } from "react";

import Card from "../components/Card";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";
import Toast from "../components/Toast";
import ComparisonTable from "../components/ComparisonTable";

import { generateProposal } from "../services/api";
import { supabase } from "../services/supabase";
import { useAuth } from "../context/AuthContext";


function ProposalGenerator() {

  const { user } = useAuth();


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



  const sampleProposals = [
    {
      title: "Professional",
      content:
        "A professional proposal focusing on skills, experience and project requirements."
    },
    {
      title: "Friendly",
      content:
        "A friendly proposal focusing on communication and collaboration."
    }
  ];



  const showToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
  };



  const copyProposal = () => {

    if (!proposal?.proposal) return;

    navigator.clipboard.writeText(
      proposal.proposal
    );

    showToast(
      "Proposal copied!",
      "success"
    );

  };



  const downloadProposal = () => {

    if (!proposal?.proposal) return;


    const blob = new Blob(
      [proposal.proposal],
      {
        type: "text/plain"
      }
    );


    const url = URL.createObjectURL(blob);


    const link = document.createElement("a");

    link.href = url;
    link.download = "AI-Proposal.txt";

    link.click();


    URL.revokeObjectURL(url);


    showToast(
      "Proposal downloaded!",
      "success"
    );

  };



  const saveHistory = async (content) => {

    if (!user) return;


    try {

      const { error } = await supabase
        .from("history")
        .insert([
          {
            user_id: user.id,
            type: "Proposal",
            content,
            status: "completed",
          }
        ]);


      if(error){
        console.error(
          "History error:",
          error
        );
      }


    } catch(err){

      console.error(
        "History save failed:",
        err
      );

    }

  };



  const generateAIProposal = async () => {

    const cleanJobPost = jobPost.trim();



    if(!cleanJobPost){

      setError(
        "Job description cannot be empty."
      );

      showToast(
        "Please enter job description.",
        "error"
      );

      return;

    }



    if(cleanJobPost.length < 30){

      setError(
        "Job description must be at least 30 characters."
      );

      showToast(
        "Job description too short.",
        "error"
      );

      return;

    }



    setError("");
    setLoading(true);
    setProposal(null);



    try{


      const response = await generateProposal({

        jobPost: cleanJobPost,
        tone,
        skill,
        platform,

      });



      setProposal(response);



      await saveHistory(
        response.proposal
      );



      showToast(
        "Proposal generated successfully!",
        "success"
      );



    }catch(err){


      const status =
        err?.response?.status;



      if(status === 401){

        showToast(
          "Please login first.",
          "error"
        );

      }
      else if(status === 403){

        showToast(
          "Daily free limit reached.",
          "error"
        );

      }
      else if(status === 429){

        showToast(
          "Too many requests. Please wait.",
          "error"
        );

      }
      else{

        showToast(
          "Something went wrong.",
          "error"
        );

      }


    }
    finally{

      setLoading(false);

    }


  };
    return (

    <div className="max-w-5xl mx-auto p-6 space-y-8">


      {/* Generator Form */}

      <Card className="shadow-lg">

        <h1 className="text-3xl font-bold text-gray-900">
          AI Proposal Generator
        </h1>


        <p className="text-gray-600 mt-2">
          Generate professional proposals for your freelance jobs.
        </p>



        <textarea

          value={jobPost}

          onChange={(e)=>
            setJobPost(e.target.value)
          }

          placeholder="Paste job description here..."

          className="w-full mt-6 p-4 border rounded-xl focus:outline-none"

          rows={8}

        />



        <div className="grid md:grid-cols-3 gap-4 mt-5">


          <select

            value={tone}

            onChange={(e)=>
              setTone(e.target.value)
            }

            className="border rounded-lg p-3"

          >

            <option>
              Professional
            </option>

            <option>
              Friendly
            </option>

            <option>
              Creative
            </option>


          </select>





          <select

            value={skill}

            onChange={(e)=>
              setSkill(e.target.value)
            }

            className="border rounded-lg p-3"

          >

            <option value="">
              Select Skill
            </option>


            {
              skills.map((item)=>(
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))
            }


          </select>





          <select

            value={platform}

            onChange={(e)=>
              setPlatform(e.target.value)
            }

            className="border rounded-lg p-3"

          >

            <option>
              Fiverr
            </option>

            <option>
              Upwork
            </option>


          </select>


        </div>




        <Button

          className="mt-6 h-12"

          onClick={generateAIProposal}

          disabled={loading}

        >

          {
            loading
            ? "Generating..."
            : "Generate Proposal"
          }


        </Button>




        {
          error && (

            <p className="text-red-500 mt-4">
              {error}
            </p>

          )
        }


      </Card>





      {/* Loading */}

      {
        loading && (

          <div className="space-y-6">

            <Skeleton className="h-40" />

            <Skeleton className="h-64" />

          </div>

        )
      }





      {/* Result */}

      {
        !loading && proposal && (

          <Card className="shadow-lg">


            <div className="flex flex-col md:flex-row md:justify-between gap-4">


              <h2 className="text-2xl font-bold">
                Generated Proposal
              </h2>



              <div className="flex gap-3">


                <Button
                  onClick={copyProposal}
                >
                  Copy
                </Button>



                <Button
                  onClick={downloadProposal}
                >
                  Download .txt
                </Button>



              </div>


            </div>





            <p className="mt-6 whitespace-pre-line text-gray-700 leading-7">

              {proposal.proposal}

            </p>






            {
              proposal?.keyPoints?.length > 0 && (

                <div className="mt-8">


                  <h3 className="font-bold">
                    Extracted Key Points
                  </h3>



                  <div className="flex flex-wrap gap-3 mt-4">


                    {
                      proposal.keyPoints.map(
                        (point,index)=>(

                          <span

                            key={index}

                            className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm"

                          >

                            {point}

                          </span>

                        )
                      )
                    }


                  </div>


                </div>

              )
            }






            <div className="mt-8 flex justify-end">


              <Button

                onClick={generateAIProposal}

                disabled={loading}

              >

                {
                  loading
                  ? "Generating..."
                  : "Regenerate"
                }


              </Button>


            </div>




          </Card>

        )
      }





      {/* Comparison */}

      <ComparisonTable

        proposals={sampleProposals}

      />







      {/* Toast */}

      <Toast

        message={toastMessage}

        type={toastType}

        onClose={()=>
          setToastMessage("")
        }

      />



    </div>

  );

}


export default ProposalGenerator;