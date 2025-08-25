import React from "react";

const ProductTopText: React.FC = () => {
  return (
    <section
      className="bg-gray-100 text-gray-800 px-4 md:px-10 py-8"
      aria-labelledby="exl-journey-heading"
    >
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Column: Title + Icon */}
        <div className="w-full md:w-1/3 flex flex-col items-start">
          <h2
            id="exl-journey-heading"
            className="text-3xl md:text-4xl font-semibold mb-2"
          >
            Well Global Inc: Efficient Conversion and Utilization of Heavy Distillates
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
           WellGlobal Inc handles heavy distillates, also known as heavy oils, and often converts them into more valuable products through a process called ‘cracking’. At WellGlobal Inc, this process involves applying extreme heat, pressure, and a catalyst to break down long hydrocarbon chains efficiently. WellGlobal Inc utilizes some heavy oils to supply products such as waxes, lubricants, and asphalt/bitumen. Additionally, WellGlobal Inc acknowledges that heavy fuel oil has traditionally been used as shipping fuel due to its relatively low supply cost.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductTopText;