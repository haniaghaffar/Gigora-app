import { useState } from "react";

import Card from "../components/Card";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";
import Toast from "../components/Toast";


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
    "Node.js"

  ];





  const generateProposal = () => {


    if (!jobPost.trim()) {

      setError(
        "Job description cannot be empty."
      );

      return;

    }



    setError("");

    setLoading(true);

    setProposal(null);




    // Existing backend API can replace this later

    setTimeout(() => {



      setProposal({


        text: `Dear Client,

I am excited to apply for your ${platform} project.

I have experience in ${
          skill || "Frontend Development"
        }.

My approach will be ${tone.toLowerCase()} and focused on delivering a clean, responsive and high-quality solution.

I have expertise in React, JavaScript and modern frontend technologies.

I would love to discuss your project further.

Best Regards.`,



        keyPoints: [

          "React Development",
          "Responsive UI",
          "Clean Code",
          "Fast Delivery"

        ]


      });





      setLoading(false);



      setToastMessage(
        "Proposal generated successfully!"
      );


      setToastType("success");



    }, 2000);



  };







  const copyProposal = () => {


    if (!proposal) return;



    navigator.clipboard.writeText(
      proposal.text
    );



    setToastMessage(
      "Proposal copied!"
    );


    setToastType("success");


  };






  const downloadProposal = () => {


    if (!proposal) return;



    const blob = new Blob(

      [proposal.text],

      {
        type: "text/plain"
      }

    );



    const url =
      URL.createObjectURL(blob);



    const link =
      document.createElement("a");



    link.href = url;


    link.download =
      "Gigora_Proposal.txt";



    link.click();



    URL.revokeObjectURL(url);



    setToastMessage(
      "Proposal downloaded!"
    );


    setToastType("success");


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

            Generate AI powered proposals
            customized for freelance projects.

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
  className="
  w-full h-44 
  border border-gray-300
  rounded-xl p-4
  bg-white
  !text-black
  placeholder-gray-400
  resize-none
  focus:outline-none
  focus:ring-2 focus:ring-blue-600
  "
/>





          {/* Tone Selector */}



          <div className="mt-6">


            <label className="font-medium text-gray-700">

              Proposal Tone

            </label>



            <div className="flex flex-wrap gap-3 mt-3">


              {[
                "Professional",
                "Friendly",
                "Confident"

              ].map((item)=>(


                <button

                  key={item}

                  onClick={()=>
                    setTone(item)
                  }


                  className={`
                  px-4 py-2 rounded-full border
                  transition
                  ${
                    tone === item
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                  }
                  `}

                >

                  {item}

                </button>


              ))}



            </div>


          </div>





          {/* Skill Dropdown */}



          <div className="mt-6">


            <label className="font-medium text-gray-700">

              Select Skill

            </label>



          <select
  value={skill}
  onChange={(e) => setSkill(e.target.value)}
  className="
  w-full mt-2
  border border-gray-300
  rounded-lg p-3
  bg-white
  !text-black
  "
>

              <option value="">
                Choose skill
              </option>


              {skills.map((item)=>(

                <option
                  key={item}
                  value={item}
                >

                  {item}

                </option>


              ))}


            </select>


          </div>
                  {/* Platform Toggle */}


        <div className="mt-6">


          <label className="font-medium text-gray-700">

            Platform

          </label>



          <div className="flex gap-3 mt-3">


            {[
              "Fiverr",
              "Upwork"

            ].map((item)=>(


              <button

                key={item}

                onClick={()=>
                  setPlatform(item)
                }


                className={`
                px-5 py-2 rounded-lg border transition
                ${
                  platform === item
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700"
                }
                `}

              >

                {item}

              </button>


            ))}


          </div>


        </div>





        {/* Error Alert */}



        {error && (


          <div className="
          mt-5 p-4 rounded-lg
          bg-red-50 border border-red-300
          ">


            <p className="text-red-600">

              {error}

            </p>


          </div>


        )}






        {/* Generate Button */}



        <Button

          className="
          mt-6 h-12
          w-full md:w-auto
          "

          onClick={generateProposal}

          disabled={
            loading || !jobPost.trim()
          }

        >

          Generate Proposal

        </Button>




      </Card>







      {/* Loading Skeleton */}



      {loading && (


        <div className="space-y-6">


          <Skeleton className="h-40" />

          <Skeleton className="h-64" />


        </div>


      )}







      {/* Generated Proposal */}



      {!loading && proposal && (


        <Card className="shadow-lg">



          <div className="
          flex flex-col md:flex-row
          md:items-center
          md:justify-between
          gap-4
          ">



            <h2 className="
            text-2xl font-bold text-gray-900
            ">

              Generated Proposal

            </h2>




            <div className="
            flex flex-wrap gap-3
            ">


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







          {/* Proposal Content */}



          <p className="
          mt-6
          whitespace-pre-line
          text-gray-700
          leading-7
          ">


            {proposal.text}


          </p>







          {/* Key Points */}



          <div className="mt-8">


            <h3 className="
            font-bold text-gray-900
            ">

              Extracted Key Points

            </h3>




            <div className="
            flex flex-wrap
            gap-3 mt-4
            ">



              {proposal.keyPoints.map((point)=>(


                <span

                  key={point}

                  className="
                  px-4 py-2
                  rounded-full
                  bg-green-100
                  text-green-700
                  text-sm
                  font-medium
                  "

                >

                  {point}

                </span>


              ))}



            </div>



          </div>







          {/* Regenerate */}



          <div className="
          mt-8 flex justify-end
          ">



            <Button

              className="h-12"

              onClick={generateProposal}

            >

              Regenerate

            </Button>



          </div>




        </Card>


      )}







      {/* Toast */}



            <Toast

        message={toastMessage}

        type={toastType}

        onClose={() =>
          setToastMessage("")
        }

      />


      </div>  

    </div>   

  );

}


export default ProposalGenerator;


