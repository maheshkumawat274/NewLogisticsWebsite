import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <section className="px-4 md:px-10 py-10">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        
        {/* Right Content (ab left me hoga) */}
        <div className="flex flex-col justify-center h-full order-2 lg:order-1">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Welcome to WELL GLOBAL INC (WGI){" "}
            <span className="text-lg md:text-xl font-semibold">
              — a trusted name in global commodities.
            </span>
          </h1>
          <p className="text-md md:text-lg">
            With expertise spanning fuels, fertilizers, precious metals, and
            gemstones, WGI delivers consistent value and dependable solutions to
            governments, institutions, and private sector clients worldwide. Our
            integrated operations across North America, Europe, the Middle East,
            Asia, and Africa allow us to source, and deliver products that power
            industries, sustain growth, and foster lasting partnerships.
          </p>
          <Link to='/contactus'>
             <button className="mt-4 px-6 py-2 border-1 border-black text-black rounded hover:bg-[#C5A15C] transition-all cursor-pointer">
              Let's Talk
            </button>
            </Link>
        </div>

        {/* Left Image (ab right me hoga) */}
        <div className="flex order-1 lg:order-2">
          <img
            src="/imgs/new5.jpg"
            alt="Aboutus of WELL GLOBAL INC"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
