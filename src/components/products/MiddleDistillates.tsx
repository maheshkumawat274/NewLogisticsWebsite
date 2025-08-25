import React from "react";

const MiddleDistillates: React.FC = () => {
  return (
    <section className="py-4 sm:py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-start sm:text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Middle Distillates Products
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-14">
          At WellGlobal Inc, our middle distillate supplies bridge the gap between lighter fuels like LPG and gasoline and heavier fuels such as fuel oil. These refined products—Gasoil, Kerosene, Diesel, and Jet Fuel—are clear to light yellow in appearance and meet global quality standards. With a strong focus on reliability and responsibility, WellGlobal Inc supplies sustainable energy solutions to markets worldwide.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 gap-10 mx-auto">
        {/* Jet A1 / Kerosine */}
        <div className="bg-gray-50 shadow-lg rounded-2xl p-2 sm:p-6 hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-[#C5A15C] mb-3">
            JET A1 / Kerosine
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Jet A1, also known as kerosene, is a superior aviation fuel 
            designed to maximize energy while minimizing consumption. 
            With exceptional heat output, it enhances flight autonomy and 
            resists cold crystallization at high altitudes, reducing risks of deterioration.
          </p>
        </div>

        {/* Gasoil */}
        <div className="bg-gray-50 shadow-lg rounded-2xl p-2 sm:p-6 hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-[#C5A15C] mb-3">
            GASOIL
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Gas oil, historically marked with a red dye, became popular in the 1960s. 
            Initially used for heating, it evolved into a trusted vehicle fuel, 
            supporting industries even before natural gas became widely available. 
            Today, it remains a key product in <span className="font-semibold text-[#C5A15C]">Well Global Inc’s</span> 
            energy portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiddleDistillates;
