import { Ship, Globe2, Boxes } from "lucide-react";

export default function SupplyChainSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-16">
      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
          Global Supply Chain
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Strengthening international trade through maritime transport, expansion 
          in U.S. markets, and robust logistics to deliver refined products 
          efficiently across the globe.
        </p>
      </div>
      {/* Content with Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center text-start p-3 sm:p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="p-4 bg-blue-100 rounded-full mb-4">
            <Ship className="w-10 h-10 text-blue-600" />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Maritime transport remains one of the most efficient methods for 
            distributing refined products across global markets, and WellGlobal Inc 
            leverages this capability to strengthen its international presence. With 
            the ability to move large volumes of refined products cost-effectively 
            over vast sea routes, WellGlobal Inc has established maritime transport 
            as a vital pillar of its global supply chain strategy.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-start p-3 sm:p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="p-4 bg-green-100 rounded-full mb-4">
            <Globe2 className="w-10 h-10 text-green-600" />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            In line with its growth vision, WellGlobal Inc has embarked on a 
            strategic initiative to expand operations across the USA, driven by the 
            rising demand for refined products in the region. Beyond this, WellGlobal 
            Inc is actively pursuing opportunities to penetrate additional U.S. 
            markets that demonstrate strong economic growth and increasing energy 
            consumption.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-start p-3 sm:p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="p-4 bg-yellow-100 rounded-full mb-4">
            <Boxes className="w-10 h-10 text-yellow-600" />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            By building a robust supply chain and utilizing maritime transport, 
            WellGlobal Inc aims to enhance its footprint, ensuring timely delivery of 
            refined products while supporting economic development in these regions. 
            As operations continue to grow, WellGlobal Inc remains committed to 
            efficiency, sustainability, and innovation in logistics, further 
            solidifying its position as a key player in the global refined products 
            distribution network.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full">
        <img
          src="/imgs/Untitled design.png"
          alt="Global Supply Chain"
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
