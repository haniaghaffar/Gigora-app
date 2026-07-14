function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$9/mo",
      features: [
        "Basic AI analysis",
        "1 Project",
        "Email Support",
      ],
    },
    {
      name: "Pro",
      price: "$29/mo",
      features: [
        "Unlimited AI Analysis",
        "Unlimited Projects",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      features: [
        "Custom AI Solutions",
        "Dedicated Manager",
        "24/7 Premium Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Pricing Plans
        </h2>

        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Choose the perfect plan to grow your freelancing career with AI.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-xl shadow-md p-8 
              hover:shadow-xl hover:-translate-y-1 
              transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-primaryBlue">
                {plan.name}
              </h3>

              <p className="text-4xl font-bold text-primaryBlue mt-4">
                {plan.price}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-gray-700"
                  >
                    <span className="text-green-600 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="
                w-full mt-8 bg-primaryBlue text-white 
                py-3 rounded-lg font-semibold
                hover:opacity-90
                transition-all duration-300
                shadow-sm hover:shadow-md
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