
import { ShieldCheck, Lightbulb, Handshake } from "lucide-react"; // React Icons

const Commitment = () => {
  return (
    <section className="py-8 px-4 sm:px-10">
      <div className=" mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Commitment to Excellence{" "}
          <span className="text-[#046381]">– Well Global Inc.</span>
        </h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Resilience */}
          <div className="group p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <div className="flex justify-center mb-5">
              <ShieldCheck className="w-14 h-14 text-[#046381] group-hover:text-blue-600 transition duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Resilience
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Well Global Inc. ensures proactive risk management to mitigate
              disruptions and maintain seamless operational continuity across
              industries.
            </p>
          </div>

          {/* Innovation */}
          <div className="group p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <div className="flex justify-center mb-5">
              <Lightbulb className="w-14 h-14 text-[#046381] group-hover:text-yellow-500 transition duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Well Global Inc., we incorporate AI, IoT, and blockchain to
              deliver smarter, more transparent, and future-ready supply chain
              solutions.
            </p>
          </div>

          {/* Customer-Centric Approach */}
          <div className="group p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <div className="flex justify-center mb-5">
              <Handshake className="w-14 h-14 text-indigo-600 group-hover:text-green-600 transition duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Customer-Centric
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Well Global Inc. is dedicated to tailoring solutions that meet the
              unique needs of our partners and customers, ensuring long-term
              success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
