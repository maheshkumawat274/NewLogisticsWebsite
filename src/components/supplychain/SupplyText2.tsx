import React from "react";

const SupplyText2: React.FC = () => {
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
            State-of-the-Art Logistics Operations for Global Energy Distribution
          </h2>
          <div className="w-12 h-1 bg-[#046381] mb-10"></div>
          <div className="flex items-center gap-2 mt-4">
            {/* Arrow Icon */}
            <div className="w-0 h-0 border-l-[20px] border-l-[#046381] border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div>
            <div className="w-0 h-0 border-l-[20px] border-l-cyan-900 border-t-[30px] border-t-transparent border-b-[30px] border-b-transparent"></div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-2/3 space-y-8">
          <p className="text-lg leading-relaxed">
            WellGlobal Inc designs its logistics operations to ensure the safe, reliable, and timely transportation of crude oil, refined products, and essential energy materials across global markets.”
          </p>
          <p className="text-lg leading-relaxed">With a focus on operational excellence, the company leverages advanced technology and global partnerships to optimize supply chains.</p>
          <p className="text-lg leading-relaxed">By delivering energy resources efficiently, WellGlobal Inc plays a vital role in supporting economic growth and meeting global energy demands.</p>
        </div>
      </div>
    </section>
  );
};

export default SupplyText2;