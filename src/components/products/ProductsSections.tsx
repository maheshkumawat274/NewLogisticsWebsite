import React from "react";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "2205/2507 Duplex Stainless Steel Sheet & Plate Supplier – Well Global Inc​",
    description:
      "Well Global Inc offers 2205 Duplex Stainless Steel, the most popular grade of duplex stainless steels. Well Global Inc supplies 2205 Duplex Stainless Steel Plate and Sheet, which combines austenitic and ferritic steels for superior performance. Well Global Inc ensures excellent workability, high impact toughness, and exceptional resistance to corrosion, stress corrosion cracking, and corrosion fatigue. Well Global Inc’s 2205 Duplex Stainless Steel also provides high strength, lower thermal expansion compared to other stainless steels, and easy weldability, making it a trusted choice for industrial applications.",
    image: "/imgs/stainless-steel-coils-sheets-plates-1.jpg",
  },
  {
    title: "Alloy 800 H/HT Sheet & Plate Supplier – Well Global Inc",
    description:
      "Well Global Inc supplies Alloy 800T, a high-nickel alloy engineered to resist carburization and oxidation at elevated temperatures. Well Global Inc’s Alloy 800T Plate and Sheet offers excellent general corrosion resistance and superior performance compared to 304/304L due to higher chromium and nickel content. Well Global Inc ensures that the high nickel content (32%) provides resistance to chloride and stress corrosion cracking, exceptional stress rupture strength, and reliable operation at temperatures up to 1050°F. Well Global Inc’s Alloy 800T also performs exceptionally in cycling applications where oxidation and carbonization are critical concerns.",
    image: "/imgs/inconel-800-h-ht-pipes-500x500.webp",
  },
  {
    title: "C220 Commercial Bronze Sheet & Plate Supplier – Well Global Inc",
    description:
      "Well Global Inc supplies C220 Commercial Bronze Sheet and Plate, a highly formable and corrosion-resistant alloy ideal for outdoor applications. Well Global Inc ensures that C220 Commercial Bronze offers mechanical properties comparable to general engineering aluminum sheet and plate. Well Global Inc’s C220 Commercial Bronze is widely used in architectural applications for its rich color, high strength, and durability. Typical uses provided by Well Global Inc include outdoor hardware, lighting fixtures, kickplates, weather striping, and marine applications, making it a trusted choice for quality and performance.",
    image: "/imgs/brass-468.jpg",
  },
  {
    title: "Granular Urea 46% – Well Global Inc",
    description:
      "Well Global Inc supplies Granular Urea 46%, a high-efficiency nitrogen fertilizer in durable granules. Well Global Inc ensures even distribution and optimal nutrient delivery, promoting healthy crop growth and maximizing agricultural productivity. Well Global Inc is committed to providing high-quality fertilizers that support sustainable farming practices worldwide.",
    image: "/imgs/What-is-urea-nitrogen-46-1024x683.webp",
  },
  {
    title: "Prilled Urea 46% – Well Global Inc",
    description:
      "Well Global Inc supplies Prilled Urea 46%, small, fast-dissolving nitrogen pellets designed for quick absorption and effective fertilization. Well Global Inc ensures optimal nutrient delivery, promoting healthy crop growth and enhancing agricultural productivity. Well Global Inc is committed to providing high-quality fertilizers for sustainable and efficient farming worldwide.",
    image: "/imgs/urea-n46-fertilizer.png.bv_resized_mobile.png.bv.webp",
  }
];

const ProductsSections: React.FC = () => {
  return (
    <section className="py-4 sm:py-16 px-4 md:px-10">
      <div className=" mx-auto space-y-10 sm:space-y-20">

        {/* Section Title + Description */}
        <div className="text-start sm:text-center max-w-5xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Responsibilities
          </h1>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold">Well Global Inc</span>, we believe true growth goes hand in hand 
            with responsibility. From ensuring health, safety, and environmental care, 
            to maintaining complete compliance and offering full insurance coverage, 
            we remain dedicated to creating a secure, sustainable, and positive impact 
            on communities and industries worldwide.
          </p>
        </div>

        {/* Services List */}
        {services.map((service, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center"
          >
            {index % 2 === 0 ? (
              <>
                {/* Text */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Image */}
                <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 object-cover rounded-2xl shadow-md"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image */}
                <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 object-cover rounded-2xl shadow-md"
                  />
                </div>

                {/* Text */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSections;
