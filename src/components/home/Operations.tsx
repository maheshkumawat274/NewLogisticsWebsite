
const operations = [
  {
    title: "Fuels & Refined Products",
    description:
      "Anchored in Houston, Rotterdam, and Dubai, with trading channels extending across the Middle East and Asia.",
    items: ["Diesel (EN590)", "Jet Fuel (A1)", "D6 Virgin Fuel Oil", "Other refined petroleum products"],
    img: "/imgs/Oil.jpg", // Google se lene ke baad file naam SEO-friendly rakhna
    alt: "Well Global Inc Fuels and Refined Petroleum Products",
  },
  {
    title: "Fertilizers",
    description:
      "Strategically positioned through India to meet growing agricultural demands in Asia and Africa.",
    items: ["Urea", "Agricultural Nutrients"],
    img: "/imgs/urea-n46-fertilizer.png.bv_resized_mobile.png.bv.webp",
    alt: "Well Global Inc Fertilizer Operations Urea Agriculture",
  },
  {
    title: "Metals & Gemstones",
    description:
      "Sourced and refined through trusted operations in East Africa and Dubai, ensuring authenticity, traceability, and compliance with international standards.",
    items: ["Gold", "Diamonds"],
    img: "/imgs/gold.png",
    alt: "Well Global Inc Gold Diamonds Metals Gemstones",
  },
];

const Operations = () => {
  return (
    <section className="py-4 md:py-10">
      <div className="container mx-auto px-4 md:px-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Our Operations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {operations.map((op, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={op.img}
                alt={op.alt}
                className="h-64 w-full object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {op.title}
                </h3>
                <ul className="list-disc list-inside text-gray-600 mb-3">
                  {op.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm">{op.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Operations;
