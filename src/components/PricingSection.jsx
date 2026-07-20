function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$9/mo",
      description: "For beginners starting with AI freelancing tools.",
      features: [
        "Basic AI Profile Analysis",
        "5 AI Generations / Month",
        "Basic SEO Suggestions",
        "Email Support",
      ],
    },

    {
      name: "Pro",
      price: "$29/mo",
      popular: true,
      description: "Best for freelancers who want faster growth.",
      features: [
        "Unlimited AI Analysis",
        "Unlimited Proposals",
        "Advanced Gig SEO",
        "Priority Support",
      ],
    },

    {
      name: "Enterprise",
      price: "Custom",
      description: "For agencies and professional teams.",
      features: [
        "Custom AI Solutions",
        "Team Accounts",
        "Dedicated Manager",
        "24/7 Premium Support",
      ],
    },
  ];


  return (
    <section
      id="pricing"
      className="bg-blue-50 py-20"
    >

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Pricing Plans
        </h2>


        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Choose a plan that helps you optimize gigs, create proposals,
          and grow your freelance career with AI.
        </p>



        <div className="grid md:grid-cols-3 gap-8 mt-12">


          {plans.map((plan)=>(

            <div
              key={plan.name}
              className={`
              relative bg-white rounded-2xl p-8 
              shadow-md transition-all duration-300
              hover:shadow-xl hover:-translate-y-2
              border
              ${
                plan.popular
                ? "border-blue-600"
                : "border-gray-200"
              }
              `}
            >


              {plan.popular && (

                <span className="
                absolute -top-4 left-1/2
                -translate-x-1/2
                bg-blue-600 text-white
                px-4 py-1 rounded-full
                text-sm font-semibold
                ">
                  Most Popular
                </span>

              )}



              <h3 className="text-2xl font-bold text-primaryBlue">
                {plan.name}
              </h3>



              <p className="text-gray-600 mt-3">
                {plan.description}
              </p>



              <h4 className="text-4xl font-bold text-gray-900 mt-6">
                {plan.price}
              </h4>



              <ul className="mt-6 space-y-3">

                {plan.features.map((feature)=>(

                  <li
                    key={feature}
                    className="flex items-center text-gray-700"
                  >

                    <span className="text-green-600 mr-3">
                      ✓
                    </span>

                    {feature}

                  </li>

                ))}

              </ul>




              <button
                className="
                w-full mt-8
                bg-primaryBlue text-white
                py-3 rounded-lg
                font-semibold
                hover:bg-blue-700
                transition
                "
              >
                Choose Plan
              </button>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default PricingSection;