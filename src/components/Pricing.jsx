import React from "react";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for startups and small businesses",
      features: [
        "5 Website Pages",
        "Basic SEO Optimization",
        "Mobile Responsive Design",
        "Contact Form Integration",
        "1 Month Support",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "10 Website Pages",
        "Advanced SEO Optimization",
        "Mobile Responsive Design",
        "Contact Form & CRM Integration",
        "E-commerce Functionality",
        "3 Months Support",
        "Weekly Performance Reports",
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For established businesses with complex needs",
      features: [
        "Unlimited Website Pages",
        "Premium SEO Optimization",
        "Custom Web Application",
        "Full E-commerce Suite",
        "API Integrations",
        "12 Months Priority Support",
        "Dedicated Account Manager",
        "Monthly Strategy Meetings",
      ],
      buttonText: "Contact Us",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="container py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple, Transparent <span className="text-blue-600">Pricing</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your business needs. All plans include our
          core features with different levels of support and customization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <div key={index} className="flex flex-col">
            <div
              className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col h-full ${
                tier.popular
                  ? "bg-gradient-to-br from-blue-500 to-blue-700 shadow-xl shadow-blue-300 border-4 border-white"
                  : "bg-white shadow-lg hover:shadow-xl"
              }`}
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <h3
                    className={`text-xl font-bold ${
                      tier.popular ? "!text-white" : "text-blue-600"
                    }`}
                  >
                    {tier.name}
                  </h3>
                </div>
                <div className="flex items-end mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      tier.popular ? "text-white" : ""
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`ml-1 ${
                      tier.popular ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
                <p
                  className={`mb-6 ${
                    tier.popular ? "!text-white" : "text-gray-600"
                  }`}
                >
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <i
                        className={`ri-check-line mr-2 ${
                          tier.popular ? "text-white" : "text-blue-500"
                        }`}
                      ></i>
                      <span
                        className={
                          tier.popular ? "text-white" : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-colors duration-300 mt-auto ${
                    tier.popular
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {tier.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
