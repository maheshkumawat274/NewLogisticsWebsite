

const GlobalAdvantage = () => {
  return (
    <section className="py-8">
      <div className="container max-w-6xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        {/* Content Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Global Advantage
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our multi-location presence ensures supply chain resilience and agility resulting in competitive and attractive pricing coupled with timely delivery on orders worldwide.   
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">Through strategically positioned hubs across major global markets, we are able to adapt quickly to dynamic industry demands and mitigate potential disruptions.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Our integrated logistics network allows us to connect producers with end users seamlessly, ensuring efficiency at every step of the supply chain.</p>

          
        </div>

        {/* Image Side */}
        <div className="flex">
          <img
            src="/imgs/new6.png" // yaha apna image daalna
            alt="WGI gobal advantage"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalAdvantage;
