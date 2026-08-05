import React, { useState } from "react";
import {
  Trophy,
  Zap,
  Gauge,
} from "lucide-react";


const ComparisonTable = ({ proposals = [] }) => {

  const [showAll, setShowAll] = useState(false);



  if (!proposals.length) {
    return (
      <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">

        <h2 className="text-2xl font-bold text-gray-800">
          No Comparison Available
        </h2>

        <p className="text-gray-500 mt-2">
          Generate proposals to compare AI models.
        </p>

      </div>
    );
  }




  const winner = proposals.reduce(
    (prev, cur) =>
      cur.score > prev.score ? cur : prev,
    proposals[0]
  );



  const displayed = showAll
    ? proposals
    : [winner];



  return (

    <div className="mt-12 w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border overflow-hidden">



      {/* Header */}

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 border-b">


        <div>

          <h2 className="text-2xl font-extrabold text-darkNavy">
            AI Model Comparison
          </h2>

          <p className="text-gray-600 text-sm mt-1">
            Compare performance, quality and speed.
          </p>

        </div>




        <button

          onClick={() =>
            setShowAll((prev) => !prev)
          }

          className="px-5 py-2 rounded-full bg-primaryBlue text-white font-semibold hover:bg-darkNavy transition"

        >

          {showAll
            ? "Show Best"
            : "Compare All"}

        </button>


      </div>





      {/* Table Wrapper */}

      <div className="overflow-x-auto">


        <table className="w-full text-left">


          <thead className="bg-gray-50">

            <tr>

              <th className="px-6 py-4 text-gray-600 font-semibold">
                Model
              </th>

              <th className="px-6 py-4 text-gray-600 font-semibold">
                Score
              </th>

              <th className="px-6 py-4 text-gray-600 font-semibold">
                Speed
              </th>

              <th className="px-6 py-4 text-gray-600 font-semibold">
                Result
              </th>

            </tr>

          </thead>




          <tbody>


            {displayed.map((p, index) => {

              const isWinner =
                p.model === winner.model;


              return (

                <tr

                  key={index}

                  className={`border-t transition ${
                    isWinner
                    ? "bg-green-50"
                    : "hover:bg-gray-50"
                  }`}

                >



                  <td className="px-6 py-4 font-semibold text-gray-800">

                    {p.model}

                  </td>




                  <td className="px-6 py-4">


                    <span className="inline-flex items-center gap-2 bg-blue-50 text-primaryBlue px-3 py-1 rounded-full font-semibold">


                      <Trophy size={15}/>

                      {p.score}

                    </span>


                  </td>




                  <td className="px-6 py-4">


                    <span className="inline-flex items-center gap-2 text-gray-700">


                      <Gauge size={16}/>

                      {p.speed}

                    </span>


                  </td>




                  <td className="px-6 py-4">


                    {isWinner && (

                      <span className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">


                        <Zap size={14}/>

                        Best Result


                      </span>

                    )}


                  </td>



                </tr>


              );


            })}



          </tbody>


        </table>


      </div>



    </div>

  );

};


export default ComparisonTable;