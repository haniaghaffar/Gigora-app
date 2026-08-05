import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";

import Button from "../components/Button";


function Hero() {

  return (

    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24">


      {/* Background Blur */}

      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"></div>



      <div className="relative max-w-6xl mx-auto px-6 text-center">



        {/* Badge */}

        <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-gray-200 px-5 py-2 rounded-full text-sm font-semibold text-primaryBlue mb-8">

          <Sparkles size={16} className="text-yellow-500"/>

          AI-Powered Freelancing Assistant

        </div>





        {/* Heading */}

        <h1 className="text-5xl md:text-7xl font-extrabold text-darkText leading-tight">


          Win More Gigs

          <br />

          <span className="bg-gradient-to-r from-primaryBlue to-purple-600 bg-clip-text text-transparent">

            With AI

          </span>


        </h1>





        {/* Description */}

        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-8">


          Optimize your freelancer profile, improve gig SEO,
          and create winning proposals using AI-powered tools
          designed to help you attract more clients.


        </p>






        {/* Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">


          <Link to="/signup">

            <Button className="flex items-center gap-2 px-8 py-3 rounded-full">

              Get Started Free

              <ArrowRight size={18}/>

            </Button>

          </Link>




          <Link
            to="/features"
            className="px-8 py-3 rounded-full border border-gray-300 bg-white hover:bg-gray-50 font-semibold text-gray-700 transition"
          >

            Explore Features

          </Link>



        </div>







        {/* Trust Features */}

        <div className="mt-14 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">



          <div className="bg-white rounded-2xl shadow-sm border p-5 flex items-center gap-3">

            <CheckCircle2
              className="text-green-600"
              size={22}
            />

            <span className="font-medium text-gray-700">
              AI Proposal Generator
            </span>

          </div>





          <div className="bg-white rounded-2xl shadow-sm border p-5 flex items-center gap-3">


            <Zap
              className="text-yellow-500"
              size={22}
            />


            <span className="font-medium text-gray-700">
              Smart Gig SEO
            </span>


          </div>






          <div className="bg-white rounded-2xl shadow-sm border p-5 flex items-center gap-3">


            <Sparkles
              className="text-primaryBlue"
              size={22}
            />


            <span className="font-medium text-gray-700">
              AI Profile Analysis
            </span>


          </div>



        </div>



      </div>


    </section>

  );

}


export default Hero;