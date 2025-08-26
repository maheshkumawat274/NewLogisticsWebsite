

const MissionVisionSection = () => {
  return (
    <section className="bg-white text-gray-700 py-8 sm:py-16 px-4 md:px-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Our Mission */}
        <div className="relative">
          <div className="absolute left-0 top-2 h-24 w-1 bg-gradient-to-b from-pink-500 to-yellow-500"></div>
          <div className="pl-6">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              To power industries and economies through the responsible, reliable, and sustainable supply of commodities, while fostering trust-based partnerships and driving long-term value creation.
            </p>
            
          </div>
        </div>

        {/* Our Vision */}
        <div className="relative">
          <div className="absolute left-0 top-2 h-24 w-1 bg-gradient-to-b from-pink-500 to-yellow-500"></div>
          <div className="pl-6">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be a world-leading integrated commodities company, recognized for excellence, innovation, and integrity, and for connecting global markets through seamless trade in energy, minerals, and resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;