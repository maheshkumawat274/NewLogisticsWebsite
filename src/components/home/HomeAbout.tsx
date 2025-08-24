
const HomeAbout = () => {
  return (
    <section className="px-4 md:px-10 ">
      <div>
        <h3 className="text-3xl sm:text-4xl font-bold">/ Aboutus /</h3>
      </div>
      <div className="py-8">
        <hr/>
      </div>
      <div className="mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        
        {/* Left Image */}
        <div className="flex">
          <img
            src="/imgs/gold.png"
            alt="Aboutus of WELL GLOBAL INC"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center h-full">
          <p className="text-gray-800 mb-4">
            WELL GLOBAL INC (WGI) is a diversified commodities company, headquartered in Wyoming, USA, with a strong international presence in Houston, Rotterdam, Dubai, and East Africa.
          </p>
          <p className="text-gray-800 mb-8">
            Our core business revolves around the sourcing and supply of refined fuels (EN590 diesel, Jet Fuel, D6, and other petroleum products), fertilizers (urea and agricultural nutrients), and precious commodities (gold and diamonds).
          </p>
          <p className="text-gray-800 mb-8">
            By combining global reach with deep sector expertise, WGI stands as a reliable partner in critical supply chains that fuel economies and generate long-term value across markets.
          </p>
          <p className="text-gray-800 mb-8">
           
             We uphold the highest standards of integrity, transparency, and accountability, ensuring every transaction meets international compliance benchmarks while delivering a competitive edge to our clients.

          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
