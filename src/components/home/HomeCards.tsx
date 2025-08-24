import CardItem from "../card/Card";


const HomeCardsSection = () => {
  const cardData = [
    {
      img: "/imgs/Oil.jpg",
      title: "Oil And Gas",
      description: "WellGlobal Inc specializes in the production of light distillates, refined oil products derived from fractional distillation at the top of the distillation tower. With their low boiling point, these ‘top of the barrel’ fuels play a critical role in energy supply. WellGlobal Inc ensures the highest quality output of light distillates, including Gasoline or Petrol, which remains the primary fuel for spark-ignited petrol engines worldwide.",
    },
    {
      img: "/imgs/Petroleum-and-Petrochemicals.webp",
      title: "Light Distillates Products",
      description: "WellGlobal Inc produces high-quality light distillates, refined oil products obtained through fractional distillation at the top of the distillation tower. Characterized by their low boiling point, these products are often referred to as the ‘top of the barrel.’ WellGlobal Inc supplies light distillates primarily used as fuels, including Gasoline or Petrol, which serves as the key energy source for spark-ignited petrol engines.",
    },
    {
      img: "/imgs/micro_refining_gettyimages-175334354.jpg",
      title: "Middle Distillates Products",
      description: "WellGlobal Inc produces a wide range of middle distillates, which are refined oil products positioned between lighter fractions such as LPG and gasoline and heavier products like fuel oil. Physically, these distillates are clear, ranging from colorless to light yellow. WellGlobal Inc ensures efficient recovery of middle distillates from the distillation column through side streams, yielding valuable fraction cuts such as gasoil, kerosene, diesel, jet fuel, and heavy gasoil.",
    },
    {
      img: "/imgs/rsw_1240h_620cg_true.webp",
      title: "Frozen LPG",
      description: "WellGlobal Inc highlights that although LPG does not freeze, it can face challenges in vaporization at extremely low temperatures. When ambient temperatures drop below 0°C, the ability of LPG to boil and convert into usable gas is significantly reduced, which may impact performance in certain applications. WellGlobal Inc applies advanced handling and storage solutions to ensure reliable LPG supply even under such conditions.",
    },
  ];

  return (
    <section className="py-5 px-4 bg-gray-100">
      {/* <div className="mx-auto text-start md:text-center mb-15">
        <h2 className="text-xl sm:text-2xl">"WellGlobal Inc, based in Houston, Texas, is a premier exploration and production company with focused operations in the Permian Basin, Marcellus Shale, and Anadarko Basin. WellGlobal Inc is committed to being a leading energy producer, delivering sustainable returns through the efficient and responsible development of its diversified oil and natural gas asset base.”</h2>
      </div> */}
      <div className="text-start md:text-center mb-15">
        <h2 className="text-xl sm:text-4xl font-bold">Our Core Products & Services</h2>
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

export default HomeCardsSection;
