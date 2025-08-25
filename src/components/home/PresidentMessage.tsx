const PresidentMessage = () => {
  return (
    <section className="bg-gray-50 py-4 sm:py-16 px-4 md:px-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        
        {/* Left Image */}
        <div className="flex">
          <img
            src="/imgs/new2.jpg"
            alt="President of WELL GLOBAL INC"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative">
            Message from the President
            <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#273aa0] rounded-full"></span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
            “At WELL GLOBAL INC, we believe that trust is the cornerstone of
            lasting partnerships. Over more than three decades, I have
            witnessed how integrity, transparency, and innovation can transform
            industries and create opportunities across borders.”
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            WGI was founded with a clear purpose — to bridge markets, deliver
            critical resources, and empower growth. From fuels to fertilizers,
            from gold to diamonds, our mission is not only to trade commodities
            but to create enduring value for our clients, partners, and
            communities.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            As we expand our global footprint — from the United States to
            Europe, the Middle East, Asia, and Africa — we remain committed to
            the principles that define us: professionalism, accountability, and
            excellence.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            On behalf of the management team, I welcome you to explore WELL
            GLOBAL INC and the opportunities we bring to the global commodities
            market.
          </p>

          {/* Signature */}
          <div className="mt-6">
            <p className="text-xl font-semibold text-gray-900">Anand Sahay</p>
            <p className="text-md text-gray-600">President, WELL GLOBAL INC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
