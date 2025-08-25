

const ManagementTeam = () => {
  return (
    <section className="py-4 sm:py-8">
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        {/* Content Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Management Team
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            WGI’s leadership team brings decades of experience across finance, energy, and commodities:
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold text-[#C5A15C]">Anand Sahay (President)-</span> 
              Over 30 years of expertise in banking and finance, providing strong financial governance and strategic direction for global growth.
            </li>
            <li>
              <span className="font-semibold text-[#C5A15C]">Fitnat Omari Ababio (Vice President)-  
</span> 
              More than 30 years in finance, sales, and marketing, with deep business acumen and global commercial expertise.
            </li>
            <li>
              <span className="font-semibold text-[#C5A15C]">Nana Ebo A. Adu (Chief Operations Officer)-</span> 
              An experienced Petroleum Engineer with over 7 years in the oil & gas sector, spanning upstream to downstream, now driving efficiency and excellence in refined products and commodity operations.
            </li>
          </ul>
        </div>

        {/* Image Side */}
        <div className="flex">
          <img
            src="/imgs/new4.jpg" // yaha apna image daalna
            alt="WGI Management Team"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
