import React from "react";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Health, Safety & ENVIRONMENTAL​",
    description:
      "Well Global Inc takes all necessary measures to ensure that our operations are safe, not only for our Team but also for all our Associates and the environment. At Well Global Inc, environmental protection is always a prime concern, and we consistently endeavor to identify all factors for effectiveness and improvement related to the environment. Well Global Inc’s approach is always to operate in a harm-free manner for the environment while maintaining safety at every step.",
    image: "/imgs/Road-Freight-Safety-1080x675.jpg",
  },
  {
    title: "INSURANCE",
    description:
      "Well Global Inc strictly follows a thorough application of all required insurances and ensures that our operations remain 100% risk-free. At Well Global Inc, all our movements are fully insured, covering not only marine risks but also war and SRCC. Well Global Inc has a zero-compromise policy when it comes to insurance terms, guaranteeing complete protection and reliability.",
    image: "/imgs/Insurances-for-Logistics-Companies-logistics-industry-1-scaled-e1697610781914.jpg",
  },
  {
    title: "SOCIOLOGY",
    description:
      "Well Global Inc actively participates in various social development programs and contributes significantly to the education and health sectors across multiple territories. Well Global Inc fosters a culture that is open, collaborative, and driven by an entrepreneurial spirit. Through its operations, Well Global Inc supports and enhances numerous economic and social benefits for communities. The impact of Well Global Inc’s operations is consistently positive and far-reaching.",
    image: "/imgs/study-logistics.webp",
  },
  {
    title: "COMPLIANCE",
    description:
      "Well Global Inc strictly practices a zero-tolerance policy and ensures full compliance with all applicable measures, making Well Global Inc 100% compliant with the terms implemented globally by regulatory bodies. All operations of Well Global Inc are thoroughly monitored to adhere to globally set standards, ensuring that Well Global Inc consistently abides by all applied sanctions.",
    image: "/imgs/1712204490285.jpeg",
  }
];

const ResponsibilitySections: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-10">
      <div className=" mx-auto px-6 space-y-20">

        {/* Section Title + Description */}
        <div className="text-center max-w-5xl mx-auto mb-12">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
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

export default ResponsibilitySections;
