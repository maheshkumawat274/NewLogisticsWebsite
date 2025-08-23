import CardItem from "../card/Card";


const SupplyServicesSection = () => {
  const cardData = [
    {
      img: "/imgs/Strategic-Transportation-Network-Design-for-Global-Logistics.jpg",
      title: "Transportation Network",
      description: "WellGlobal Inc operates a robust transportation network of pipelines, tankers, rail, and trucks, ensuring maximum efficiency in the movement of crude oil, refined products, and essential energy materials.",
    },
    {
      img: "/imgs/transport-visibility_header.jpg.webp",
      title: "Real-Time Tracking",
      description: "WellGlobal Inc provides real-time tracking through advanced monitoring systems, enabling customers to track shipments accurately and ensuring safe, on-time delivery across global markets.",
    },
    {
      img: "/imgs/download-1.jpeg",
      title: "Safety First",
      description: "WellGlobal Inc prioritizes safety first with comprehensive safety protocols designed to protect people, safeguard the environment, and secure valuable assets throughout its logistics and transportation operations.",
    }
  ];

  return (
    <section className="py-5 px-4 bg-gray-50">
      <div className="mx-auto text-start md:text-center mb-15">
        <h2 className="text-3xl sm:text-5xl font-bold">Our Services</h2>
        <div className="flex justify-center py-5">
          <p className="text-xl sm:text-2xl max-w-5xl ">“This section provides visitors with a clear overview of WellGlobal Inc’s core services, highlighting our expertise in energy exploration, production, logistics, and sustainable supply chain solutions</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-10 justify-center">
        {cardData.map((card, index) => (
          <CardItem
            key={index}
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

    </section>
  );
};

export default SupplyServicesSection;
