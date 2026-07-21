import Button from "./Button";

function UpgradeModal({ isOpen, onClose }) {

  if (!isOpen) return null;


  return (

    <div
      className="
      fixed
      inset-0
      bg-black/50
      flex
      items-center
      justify-center
      z-50
      p-4
      "
    >


      <div
        className="
        bg-white
        rounded-2xl
        shadow-2xl
        max-w-md
        w-full
        p-6
        "
      >


        {/* Header */}

        <div className="text-center">


          <h2
            className="
            text-2xl
            font-bold
            text-gray-900
            "
          >
            Upgrade to Pro 🚀
          </h2>


          <p
            className="
            text-gray-500
            mt-2
            "
          >
            Unlock powerful AI features and grow faster.
          </p>


        </div>




        {/* Plan */}

        <div
          className="
          mt-6
          bg-blue-50
          rounded-xl
          p-5
          "
        >

          <h3
            className="
            text-xl
            font-bold
            text-blue-700
            "
          >
            Pro Plan
          </h3>


          <p
            className="
            text-3xl
            font-extrabold
            mt-2
            "
          >
            $29
            <span className="text-sm font-normal">
              /month
            </span>
          </p>


        </div>




        {/* Features */}

        <ul
          className="
          mt-5
          space-y-3
          text-gray-700
          "
        >

          <li>✅ Unlimited AI generations</li>

          <li>✅ Advanced SEO optimization</li>

          <li>✅ Better proposal suggestions</li>

          <li>✅ Priority AI processing</li>


        </ul>




        {/* Actions */}

        <div
          className="
          flex
          gap-3
          mt-7
          "
        >

          <Button
            className="flex-1"
            onClick={()=>{
              alert("Upgrade flow coming soon!");
            }}
          >
            Upgrade Now
          </Button>



          <Button
            className="
            flex-1
            bg-gray-200
            text-gray-700
            hover:bg-gray-300
            "
            onClick={onClose}
          >
            Cancel
          </Button>


        </div>



      </div>


    </div>

  );

}


export default UpgradeModal;