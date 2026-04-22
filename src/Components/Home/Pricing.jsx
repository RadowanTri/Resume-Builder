import React from "react";
import { ZapIcon } from "lucide-react";
import SectionTItle from "../SectionTItle";

const Pricing = () => {
  const [isYearly, setIsYearly] = React.useState(false);

  const plans = [
    {
      name: "Free",
      monthlyPrice: 0,
      yearlyPrice: 0,
      monthlyLabel: "/month",
      yearlyLabel: "/yearly",
      description: "Explore the core features and get a feel for the workflow.",
      buttonText: "Get Started Free",
      popular: false,
      pro: false,
      features: [
        "Core productivity tools",
        "Basic insights & reports",
        "Limited daily usage",
        "Sync across 2 devices",
      ],
    },
    {
      name: "Pro",
      monthlyPrice: 19,
      yearlyPrice: 13,
      monthlyLabel: "/month",
      yearlyLabel: "/yearly",
      description: "Everything you need to stay productive and work smarter.",
      buttonText: "Upgrade to Pro",
      popular: true,
      pro: true,
      features: [
        "Everything in Free",
        "Advanced insights & analytics",
        "Unlimited reports",
        "Sync across multiple devices",
        "Priority updates",
      ],
    },
    {
      name: "Lifetime",
      monthlyPrice: 249,
      yearlyPrice: 249,
      monthlyLabel: "pay once, use forever",
      yearlyLabel: "pay once, use forever",
      description: "Best value for long-term users with no recurring fees.",
      buttonText: "Get Lifetime access",
      popular: false,
      pro: false,
      features: [
        "All Pro features",
        "Lifetime updates",
        "Early access to new features",
        "Ultimate productivity companion",
        "Priority support",
      ],
    },
  ];

  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center px-4 py-16">
        <SectionTItle
          icon={
            <>
              <ZapIcon width={15} />
              <span>Pricing</span>
            </>
          }
          title={<span className="text-white">Simple Pricing</span>}
          description={<span className="text-zinc-300">Choose the perfect plan for your needs. No hidden fees, cancel anytime.</span>}

        />


        <div className="flex items-center gap-4 mt-8">
          <span className="text-sm text-white">Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`w-11 h-6 rounded-full p-0.5 transition cursor-pointer ${
              isYearly ? "bg-blue-600" : "border border-zinc-800"
            }`}
          >
            <div
              className={`size-4 bg-white rounded-full transition-transform duration-300 ${
                isYearly ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className="text-sm text-white">Yearly</span>
          <span className="text-xs bg-[#D9D9D9] text-black px-2 py-1 rounded-full font-medium">
            30% OFF
          </span>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-6 w-full max-w-5xl mt-10">
          {plans.map((plan, index) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const label = isYearly ? plan.yearlyLabel : plan.monthlyLabel;

            return (
              <div
                key={index}
                className={`${
                  plan.pro ? "bg-zinc-950" : "bg-black"
                } border border-zinc-800 hover:border-zinc-700 transition-colors rounded-xl p-6 flex-1 min-w-64 max-w-sm`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-zinc-50">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="text-xs text-zinc-50 border border-zinc-900 px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mt-5">
                  <span className="text-3xl font-semibold text-zinc-50">
                    ${price}
                  </span>
                  <span className="text-xs font-medium text-zinc-50">
                    {label}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 mt-4 max-w-64">
                  {plan.description}
                </p>

                <button
                  className={`w-full mt-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition ${
                    plan.pro
                      ? "bg-blue-600 text-zinc-50 hover:bg-blue-700"
                      : "border border-zinc-800 text-zinc-50 hover:bg-zinc-900"
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="flex items-center gap-2 mt-7">
                  <div className="flex-1 h-px bg-zinc-800" />
                  <span className="text-sm font-medium text-zinc-200">
                    Features
                  </span>
                  <div className="flex-1 h-px bg-zinc-800" />
                </div>

                <div className="flex flex-col gap-3 mt-4">
                  {plan.features.map((feature, fi) => (
                    <div key={fi} className="flex items-center gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          clipPath="url(#a)"
                          stroke="#e4e4e7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 12.83A5.833 5.833 0 1 0 7 1.165a5.833 5.833 0 0 0 0 11.667" />
                          <path d="m5.25 7.003 1.167 1.166L8.75 5.836" />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M0 0h14v14H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="text-sm text-zinc-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Pricing;