import React from "react";

const ResponsibilityText1: React.FC = () => {
  return (
    <section
      className="bg-white text-gray-800 px-4 md:px-10 py-8"
      aria-labelledby="exl-journey-heading"
    >
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Column: Title + Icon */}
        <div className="w-full md:w-1/3 flex flex-col items-start">
          <h2
            id="exl-journey-heading"
            className="text-3xl md:text-4xl font-semibold mb-2"
          >
            Our Commitment to Sustainability and Responsible Operations
          </h2>
          <div className="w-12 h-1 bg-[#046381] mb-10"></div>
          <div className="flex items-center gap-2 mt-0">
            {/* Arrow Icon */}
            <div className="w-0 h-0 border-l-[20px] border-l-[#046381] border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div>
            <div className="w-0 h-0 border-l-[20px] border-l-cyan-900 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-2/3 space-y-8">
          <p className="text-lg leading-relaxed">
            WellGlobal Inc is dedicated to operating responsibly and sustainably, striving to minimize its environmental impact while maintaining safe and efficient logistics operations. WellGlobal Inc actively supports local communities, prioritizes the well-being of its employees, and integrates innovative sustainable practices across its global supply chain. Through these initiatives, WellGlobal Inc aims to create a positive, lasting impact on the environment, society, and the global energy industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResponsibilityText1;