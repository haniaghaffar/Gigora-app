import Button from "./Button";
import {
  X,
  Crown,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


function UpgradeModal({ isOpen, onClose }) {

  const navigate = useNavigate();


  if (!isOpen) return null;



  const features = [
    "Unlimited AI generations",
    "Advanced SEO optimization",
    "Better proposal suggestions",
    "Priority AI processing",
  ];



  const handleUpgrade = () => {

    navigate("/checkout");

    onClose();

  };



  return (

    <div
      className="
      fixed inset-0
      bg-black/50
      backdrop-blur-sm
      flex items-center justify-center
      z-50
      p-4
      "
    >



      <div
        className="
        relative
        bg-white
        rounded-3xl
        shadow-2xl
        max-w-md
        w-full
        p-8
        animate-in
        "
      >



        {/* Close */}

        <button
          onClick={onClose}
          className="
          absolute
          top-4
          right-4
          text-gray-400
          hover:text-gray-700
          "
        >

          <X size={22}/>

        </button>





        {/* Header */}

        <div className="text-center">


          <div className="mx-auto w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-5">

            <Crown
              size={34}
              className="text-amber-600"
            />

          </div>



          <div className="flex justify-center items-center gap-2">


            <Sparkles
              size={18}
              className="text-primaryBlue"
            />


            <h2 className="text-3xl font-extrabold text-gray-900">

              Upgrade to Pro

            </h2>


          </div>



          <p className="text-gray-500 mt-3">

            Unlock premium AI tools and grow your freelance business faster.

          </p>


        </div>







        {/* Plan Card */}


        <div
          className="
          mt-7
          rounded-2xl
          bg-gradient-to-r
          from-indigo-50
          to-purple-50
          p-6
          border
          "
        >


          <h3 className="text-xl font-bold text-primaryBlue">

            Pro Plan

          </h3>



          <p className="text-4xl font-extrabold mt-2">

            $9.99

            <span className="text-sm font-medium text-gray-500">
              /month
            </span>

          </p>


        </div>







        {/* Features */}


        <ul className="mt-6 space-y-4">


          {features.map((feature,index)=>(

            <li
              key={index}
              className="flex items-center gap-3 text-gray-700"
            >

              <CheckCircle2
                size={20}
                className="text-green-600"
              />

              {feature}


            </li>

          ))}


        </ul>







        {/* Actions */}


        <div className="flex flex-col gap-3 mt-8">


          <Button
            onClick={handleUpgrade}
            className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            "
          >

            Upgrade Now

            <ArrowRight size={18}/>

          </Button>





          <button

            onClick={onClose}

            className="
            w-full
            py-3
            rounded-xl
            bg-gray-100
            text-gray-700
            font-semibold
            hover:bg-gray-200
            transition
            "

          >

            Cancel

          </button>



        </div>



      </div>


    </div>

  );

}


export default UpgradeModal;