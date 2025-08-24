import { Link } from "react-router-dom";


const WelcomeSection = () => {
  return (
    <main className="font-sans text-gray-700">
      {/* Welcome Section */}
      <section className="px-4 md:px-20 py-4 sm:py-16 bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left: Welcome Text */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold mb-6">Welcome to WELL GLOBAL INC (WGI) <span className="text-lg md:text-xl font-semibold"> — a trusted name in global commodities.</span></h1>
            <p className="text-md md:text-lg">
              
              With expertise spanning fuels, fertilizers, precious metals, and gemstones, WGI delivers consistent value and dependable solutions to governments, institutions, and private sector clients worldwide. Our integrated operations across North America, Europe, the Middle East, Asia, and Africa allow us to source, refine, and deliver products that power industries, sustain growth, and foster lasting partnerships.

            </p>
          </div>

          {/* Right: Image + Button */}
          <div className="w-full md:w-1/2 text-center md:text-left flex justify-center items-center">
            <div>
              <img src="./imgs/export-import-business-businessmen-handshake-600nw-1909379125.webp" alt="Handshake" className="w-full mx-auto md:mx-0 mb-6" />
            <p className="text-xl font-medium"> Connecting <span className="text-[#C5A15C] font-semibold">Markets, Commodities & Communities</span> Worldwide </p>
            <Link to='/contactus'>
             <button className="mt-4 px-6 py-2 border-1 border-black text-black rounded hover:bg-[#C5A15C] transition-all cursor-pointer">
              Let's Talk
            </button>
            </Link>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default WelcomeSection;
