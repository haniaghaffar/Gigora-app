import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  LayoutDashboard,
  CreditCard,
} from "lucide-react";


const Success = () => {

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });


  useEffect(() => {

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };


    window.addEventListener(
      "resize",
      handleResize
    );


    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);



  return (

    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 px-4">


      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={180}
      />



      <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-10 text-center relative z-10">


        {/* Success Icon */}

        <div className="flex justify-center mb-6">

          <div className="bg-green-100 p-5 rounded-full">

            <CheckCircle2
              size={70}
              className="text-green-600"
            />

          </div>

        </div>




        <div className="flex justify-center items-center gap-2 mb-3">

          <Sparkles
            className="text-primaryBlue"
            size={22}
          />

          <h1 className="text-4xl font-extrabold text-gray-800">
            Welcome to Pro!
          </h1>

        </div>




        <p className="text-gray-600 text-lg leading-7 mb-8">

          Your subscription has been activated successfully.
          Enjoy unlimited AI tools and premium features.

        </p>




        {/* Benefits */}

        <div className="bg-indigo-50 rounded-2xl p-5 text-left mb-8">


          <h3 className="font-bold text-gray-800 mb-4">
            Your Pro benefits:
          </h3>


          <ul className="space-y-3 text-gray-700">


            <li className="flex items-center gap-3">

              <CheckCircle2
                size={18}
                className="text-green-600"
              />

              Unlimited AI Generations

            </li>


            <li className="flex items-center gap-3">

              <CheckCircle2
                size={18}
                className="text-green-600"
              />

              AI Model Comparison

            </li>


            <li className="flex items-center gap-3">

              <CheckCircle2
                size={18}
                className="text-green-600"
              />

              Premium SEO Optimization

            </li>


            <li className="flex items-center gap-3">

              <CheckCircle2
                size={18}
                className="text-green-600"
              />

              Priority AI Processing

            </li>


          </ul>


        </div>




        {/* Buttons */}


        <div className="space-y-4">


          <Link
            to="/dashboard"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primaryBlue hover:bg-darkNavy text-white font-semibold transition"
          >

            <LayoutDashboard size={20}/>

            Go to Dashboard

            <ArrowRight size={18}/>

          </Link>



          <Link
            to="/billing"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold transition"
          >

            <CreditCard size={20}/>

            View Billing

          </Link>


        </div>




        <p className="text-xs text-gray-500 mt-6">

          Thank you for upgrading to Pro.

        </p>



      </div>


    </div>

  );
};


export default Success;