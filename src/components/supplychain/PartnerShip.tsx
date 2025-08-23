import { FaIndustry, FaGlobe, FaHandshake } from "react-icons/fa";

export default function PartnerSection() {
  return (
    <section className=" py-16 px-4 md:px-10">
      <div className=" mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At <span className="font-semibold text-[#046381]">Well Global Inc.</span>, 
            we are a trusted leader in the oil and energy industry, dedicated to delivering 
            innovation, reliability, and efficiency in global supply chain and logistics. 
            With years of expertise, <span className="font-semibold text-[#046381]">Well Global Inc.</span> 
            ensures sustainable solutions that meet the evolving energy needs of businesses worldwide. 
            Partner with <span className="font-semibold text-[#046381]">Well Global Inc.</span> today to explore 
            how our advanced strategies can drive growth, strengthen operations, and create 
            long-term value for your organization.
          </p>

          {/* Highlights with Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <FaIndustry className="text-[#046381] text-3xl mb-2" />
              <p className="text-sm font-medium">Energy Innovation</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <FaGlobe className="text-[#046381] text-3xl mb-2" />
              <p className="text-sm font-medium">Global Reach</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <FaHandshake className="text-[#046381] text-3xl mb-2" />
              <p className="text-sm font-medium">Trusted Partnership</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/imgs/photo-1581092580497-e0d23cbdf1dc.jpeg"
            alt="Well Global Inc Oil Industry"
            className="rounded-2xl shadow-2xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
