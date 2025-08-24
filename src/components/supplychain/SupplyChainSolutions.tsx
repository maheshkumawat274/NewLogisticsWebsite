import { ArrowUpRight } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Driving Value Through Strategic Sourcing",
    description:
      "Partnering with global and local suppliers to ensure quality and reliability.",
  },
  {
    id: 2,
    title: "Driving Business Value Through Efficient Procurement",
    description:
      "Utilizing advanced analytics to secure the best materials and equipment.",
  },
  {
    id: 3,
    title: "Sustainable Practices for a Resilient Future",
    description:
      "Committed to reducing carbon footprints through green procurement and renewable energy initiatives.",
  },
];

export default function SupplyChainSolutions() {
  return (
    <section className="py-4 sm:py-16 bg-white px-4 sm:px-10">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Left Side Image */}
        <div className="flex">
          <img
            src="/imgs/logistics.jpg"
            alt="Abstract Shape"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            End-to-End Integrated <br /> Supply Chain Solutions
          </h2>
          <p className="text-md sm:text-lg mb-6">
            “WellGlobal Inc leverages cutting-edge technology and industry best
            practices to optimize every link in its supply chain. Through our
            integrated supply chain solutions, WellGlobal Inc ensures seamless
            coordination between procurement, production, and distribution,
            driving efficiency, reducing costs, and minimizing environmental
            impact across global operations.”
          </p>
          

          <div className="divide-y divide-gray-300">
            {features.map((feature) => (
              <div key={feature.id} className="py-4 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {String(feature.id).padStart(2, "0")}. {feature.title}
                  </h3>
                  <ArrowUpRight
                    className="text-gray-500 group-hover:text-yellow-500 transition"
                    size={20}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
