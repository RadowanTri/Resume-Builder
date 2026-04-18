
import React, { useState } from "react";
import { ZapIcon } from "lucide-react";
import SectionTItle from "../SectionTItle";

const featuresData = [
  {
    title: "Simple Process",
    description: "Build your resume effortlessly with our streamlined process. Create a professional resume in minutes using intelligent AI-powered tools.",
    color: "violet",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="size-6 stroke-violet-600">
        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
      </svg>
    ),
    bg: "bg-violet-100",
    border: "border-violet-300",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Get instant insights into your resume performance and job readiness with smart analytics dashboards.",
    color: "orange",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="size-6 stroke-orange-
        600">
        <path d="M12 15V3" />
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="m7 10 5 5 5-5" />
      </svg>
    ),
    bg: "bg-orange-100",
    border: "border-orange-300",
  },
  {
    title: "Customizable Reports",
    description:"Export professional, ATS-friendly resume reports for job applications.",
    color: "green",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="size-6 stroke-green-600">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
      </svg>
    ),
    bg: "bg-green-100",
    border: "border-green-300",
  },
];

const Feature = () => {
  // ✅ first item active by default
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <div id="Feature" className="flex flex-col items-center">
      <SectionTItle
        icon={
          <>
          <ZapIcon width={15}/>
          <span>Features</span>
          </>
        }
        title="Powerful Features"
        description="Unlock the full potential of your finances with our comprehensive suite of features designed to simplify and enhance your financial management experience."
      />  
        
      <div className="flex flex-col md:flex-row items-center justify-center">

        {/* IMAGE */}
        <img
          className="max-w-2xl w-full xl:-ml-32"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt=""
        />

        {/* FEATURES */}
        <div className="px-4 md:px-0 space-y-4">
          {featuresData.map((item, index) => {
            const isActive = hoverIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(0)}
                className="max-w-md cursor-pointer"
              >
                <div
                  className={`
                    p-6 flex gap-4 rounded-xl border transition-all duration-300
                    ${isActive ? `${item.bg} ${item.border}` : "border-transparent bg-white"}
                  `}
                >
                  {item.icon}

                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-700">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Feature;