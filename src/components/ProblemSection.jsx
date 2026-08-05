import React from "react";
import {
  UsersRound,
  SearchX,
  FileWarning,
} from "lucide-react";


function ProblemSection() {

  const problems = [
    {
      title: "No Clients",
      description:
        "Struggling to attract clients and grow your freelancing career.",
      icon: UsersRound,
    },
    {
      title: "Gig Not Ranking",
      description:
        "Your gigs are not appearing in search results, reducing visibility.",
      icon: SearchX,
    },
    {
      title: "Proposals Rejected",
      description:
        "Sending proposals without getting replies or winning projects.",
      icon: FileWarning,
    },
  ];



  return (

    <section
      id="problems"
      className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 overflow-hidden"
    >


      {/* Background */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>




      <div className="relative max-w-7xl mx-auto px-6">



        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">


          <span className="inline-block px-4 py-2 rounded-full bg-white border shadow-sm text-sm font-semibold text-primaryBlue mb-5">

            Freelancer Challenges

          </span>



          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">


            Common Problems

            <span className="text-primaryBlue">
              {" "}Freelancers Face
            </span>


          </h2>




          <p className="mt-5 text-lg text-gray-600 leading-8">


            Many freelancers struggle with visibility,
            client acquisition, and creating proposals that win.
            Gigora solves these challenges with AI-powered tools.


          </p>


        </div>






        {/* Cards */}


        <div className="grid gap-8 mt-14 md:grid-cols-3">


          {problems.map((problem) => {


            const Icon = problem.icon;


            return (

              <div
                key={problem.title}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >



                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-primaryBlue transition">


                  <Icon
                    size={32}
                    className="text-primaryBlue group-hover:text-white transition"
                  />


                </div>





                <h3 className="text-2xl font-bold text-gray-900 text-center">

                  {problem.title}

                </h3>




                <p className="mt-4 text-center text-gray-600 leading-7">

                  {problem.description}

                </p>



              </div>

            );


          })}


        </div>



      </div>


    </section>

  );

}


export default ProblemSection;