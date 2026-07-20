import React from "react";
import {
  UserSearch,
  Search,
  PenTool,
  LayoutDashboard,
} from "lucide-react";


function FeatureSection() {

  const features = [
    {
      title: "AI Profile Analyzer",
      description:
        "Get AI-powered insights to improve your freelancer profile and identify areas for growth.",
      icon: UserSearch,
    },

    {
      title: "Gig SEO Optimizer",
      description:
        "Boost your gig visibility with AI-powered keyword, title, and description optimization.",
      icon: Search,
    },

    {
      title: "Proposal Generator",
      description:
        "Generate professional proposals that increase your chances of winning projects.",
      icon: PenTool,
    },

    {
      title: "Smart Dashboard",
      description:
        "Manage all your AI tools, insights, and generated content from one dashboard.",
      icon: LayoutDashboard,
    },
  ];


  return (

    <section
      id="features"
      className="bg-white py-20"
    >

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F]">
            What We Offer
          </h2>


          <p className="mt-4 max-w-2xl mx-auto text-[#6B7280] text-lg">
            Powerful AI tools designed to help freelancers optimize
            profiles, improve gig ranking, and create better proposals.
          </p>

        </div>




        <div className="
          grid gap-8 mt-14
          md:grid-cols-2
          lg:grid-cols-4
        ">


          {features.map((feature)=>{

            const Icon = feature.icon;


            return (

              <div
                key={feature.title}
                className="
                bg-[#EFF6FF]
                rounded-2xl
                p-8
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >


                <div className="
                  w-16 h-16
                  mx-auto
                  rounded-xl
                  bg-[#1A56DB]
                  flex
                  items-center
                  justify-center
                  mb-6
                ">

                  <Icon
                    size={32}
                    className="text-white"
                  />

                </div>




                <h3 className="
                  text-xl
                  font-bold
                  text-[#1E3A5F]
                  text-center
                ">
                  {feature.title}
                </h3>




                <p className="
                  mt-4
                  text-center
                  text-[#6B7280]
                  leading-7
                ">
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


export default FeatureSection;