import React from "react";
import {
  UserRound,
  Search,
  FileText,
  Sparkles,
} from "lucide-react";


function SolutionSection() {


  const features = [
    {
      icon: UserRound,
      title: "Profile Analyzer",
      description:
        "Analyze your freelancer profile and get AI-powered recommendations to improve your online presence.",
    },
    {
      icon: Search,
      title: "Gig SEO Optimizer",
      description:
        "Optimize titles, descriptions, and keywords to improve ranking and attract more clients.",
    },
    {
      icon: FileText,
      title: "Proposal Generator",
      description:
        "Create personalized, professional proposals that increase your chances of winning projects.",
    },
  ];



  return (

    <section
      id="features"
      className="relative py-24 bg-gradient-to-br from-white via-indigo-50 to-purple-50 overflow-hidden"
    >


      {/* Background */}

      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>




      <div className="relative max-w-7xl mx-auto px-6">



        {/* Heading */}


        <div className="text-center max-w-3xl mx-auto">


          <div className="inline-flex items-center gap-2 bg-white border shadow-sm px-5 py-2 rounded-full text-sm font-semibold text-primaryBlue mb-6">

            <Sparkles size={16}/>

            AI-Powered Solutions

          </div>




          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">


            Everything You Need To

            <span className="text-primaryBlue">
              {" "}Win More Projects
            </span>


          </h2>



          <p className="mt-5 text-lg text-gray-600 leading-8">


            Gigora provides intelligent AI tools that help freelancers
            improve profiles, optimize gigs, and create winning proposals.


          </p>



        </div>







        {/* Cards */}


        <div className="grid md:grid-cols-3 gap-8 mt-14">


          {features.map((feature, index) => {


            const Icon = feature.icon;



            return (

              <div

                key={index}

                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"

              >




                {/* Number */}

                <div className="flex justify-between items-start mb-6">


                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-primaryBlue transition">


                    <Icon
                      size={34}
                      className="text-primaryBlue group-hover:text-white transition"
                    />


                  </div>




                  <span className="text-5xl font-extrabold text-gray-100">

                    0{index + 1}

                  </span>



                </div>






                <h3 className="text-2xl font-bold text-slate-900">

                  {feature.title}

                </h3>





                <p className="mt-4 text-gray-600 leading-7">

                  {feature.description}

                </p>




              </div>


            );


          })}


        </div>



      </div>


    </section>

  );

}


export default SolutionSection;