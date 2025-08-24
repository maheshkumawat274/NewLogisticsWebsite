import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeAbout() {
  return (
    <section className="bg-neutral-900 text-white px-4 sm:px-10 py-10 sm:py-20">
      <div>
        <h3 className="text-3xl sm:text-4xl font-bold">/ Aboutus /</h3>
      </div>
      <div className="py-8">
        <hr/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Title Section */}
        <div>
          <h1 className="text-2xl sm:text-5xl font-bold leading-tight">
            Top Transportation <br />
            Company Partnered with <br />
            Well Global Inc
          </h1>
        </div>

        {/* Right Description Section */}
        <div>
          <p className="text-gray-300 mb-4">
            WELL GLOBAL INC (WGI) is a diversified commodities company, headquartered in Wyoming, USA, with a strong international presence in Houston, Rotterdam, Dubai, India, and East Africa.
          </p>
          <p className="text-gray-300 mb-8">
            Our core business revolves around the sourcing and supply of refined fuels (EN590 diesel, Jet Fuel, D6, and other petroleum products), fertilizers (urea and agricultural nutrients), and precious commodities (gold and diamonds).
          </p>
          <p className="text-gray-300 mb-8">
            By combining global reach with deep sector expertise, WGI stands as a reliable partner in critical supply chains that fuel economies and generate long-term value across markets.
          </p>
          <p className="text-gray-300 mb-8">
           
             We uphold the highest standards of integrity, transparency, and accountability, ensuring every transaction meets international compliance benchmarks while delivering a competitive edge to our clients.

          </p>

          

          {/* Button */}
          <Link to='/aboutus'>
           <button className="flex items-center border border-white px-5 py-2 hover:bg-white hover:text-black transition rounded-sm cursor-pointer">
            More about <ArrowUpRight className="ml-2 h-5 w-5" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
