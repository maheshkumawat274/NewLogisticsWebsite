import CardItem from "../card/Card";


const ProductsCardSection = () => {
  const cardData = [
    {
      img: "/imgs/Petroleum-and-Petrochemicals.webp",
      title: "LSFO Products",
      description: "Well Global Inc offers low-sulfur fuel oil (LSFO) as the optimal choice for environmentally conscious consumers. At Well Global Inc, this type of heavy fuel oil, including marine fuel types IFO-180cst and IFO-380cst, features a sulfur content below 1% thanks to Well Global Inc’s thorough desulfurization processes.",
    },
    {
      img: "/imgs/asia_hsfo_cracks_pull_arb_flows_but_global_dpp_arrivals_weak_cover.jpg",
      title: "HSFO Products",
      description: "Well Global Inc offers High Sulfur Fuel Oil (HSFO) as a cost-effective solution with a maximum sulfur content of 3.5%, providing an alternative to low-sulfur marine fuels. Well Global Inc also promotes scrubbers in Emission Control Areas (ECAs) to reduce sulfur and harmful emissions, ensuring cleaner and sustainable operations worldwide.",
    }
  ];

  return (
    <section className="py-10 px-4 bg-gray-100">
      

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

export default ProductsCardSection;
