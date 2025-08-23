import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeAbout() {
  return (
    <section className="bg-neutral-900 text-white px-4 sm:px-10 py-10 sm:py-20">
      <div>
        <h3>/Aboutus/</h3>
      </div>
      <div className="py-8">
        <hr/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Title Section */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Top Transportation <br />
            Company Partnered with <br />
            Well Global Inc
          </h1>
        </div>

        {/* Right Description Section */}
        <div>
          <p className="text-gray-300 mb-4">
            Well Global Inc specializes in delivering safe, fast, and cost-effective transportation and logistics solutions tailored for modern businesses. Well Global Inc is committed to excellence, innovation, and customer satisfaction, ensuring every shipment arrives on time and every supply chain runs smoothly.
          </p>
          <p className="text-gray-300 mb-8">
            With Well Global Inc’s modern fleet, advanced tracking systems, and dedicated support team, Well Global Inc efficiently connects businesses and communities while maintaining the highest standards of reliability and trust.
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
