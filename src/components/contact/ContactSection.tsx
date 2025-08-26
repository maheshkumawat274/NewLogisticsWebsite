
const ContactSection = () => {
  return (
    <>
     <section className="bg-gray-50 py-12 px-4 sm:px-10">
  <div className=" mx-auto text-center">
    {/* Heading */}
    <h2 className="text-3xl font-bold text-[#C5A15C] mb-4">Get in Touch</h2>
    <p className="text-gray-600 mb-12">
      Reach out to us using the details below.
    </p>

    {/* Contact Cards */}
    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      {/* Left Image */}
      <div className="flex ">
        <img
          src="/imgs/article-thumb-10.webp"
          alt="Meeting"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Contact Info */}
      <div className="bg-white p-2 sm:p-8 rounded-2xl shadow-md text-left">
        <h3 className="text-xl font-semibold text-[#C5A15C] mb-6">
          Contact Information
        </h3>
      
        {/* Headquarters */}
        <div className="flex items-start gap-3 mb-4">
          <span className="p-3 rounded-full bg-[#C5A15C]/10 text-[#C5A15C]">🏢</span>
          <p className="text-gray-700">
            <strong>Headquarters:</strong> 1712 Pioneer Avenue, Suite 500, Cheyenne WY 82001, Wyoming, United States
          </p>
        </div>
      
        {/* Fuel Operations */}
        <div className="flex items-start gap-3 mb-4">
          <span className="p-3 rounded-full bg-[#C5A15C]/10 text-[#C5A15C]">⛽</span>
          <p className="text-gray-700">
            <strong>Fuel Operations:</strong> Houston, Rotterdam, Dubai, Middle East & Asia
          </p>
        </div>
      
        {/* Fertilizer Operations */}
        <div className="flex items-start gap-3 mb-4">
          <span className="p-3 rounded-full bg-[#C5A15C]/10 text-[#C5A15C]">🌱</span>
          <p className="text-gray-700">
            <strong>Fertilizer Operations:</strong> India
          </p>
        </div>
      
        {/* Gold & Diamond Operations */}
        <div className="flex items-start gap-3 mb-4">
          <span className="p-3 rounded-full bg-[#C5A15C]/10 text-[#C5A15C]">💎</span>
          <p className="text-gray-700">
            <strong>Gold & Diamond Operations:</strong> East Africa & Dubai
          </p>
        </div>
      
        {/* Email */}
        <div className="flex items-center gap-3 mb-4">
          <span className="p-3 rounded-full bg-[#C5A15C]/10 text-[#C5A15C]">📧</span>
          <a 
            href="mailto:Info@wellglobalinc.com" 
            className="text-gray-700 hover:text-[#C5A15C] transition-colors"
          >
            Info@wellglobalinc.com
          </a>
        </div>
        
        {/* Phone */}
        <div className="flex items-center gap-3 mb-4">
          <span className="p-3 rounded-full bg-[#C5A15C]/10 text-[#C5A15C]">📞</span>
          <a 
            href="tel:+13017558105" 
            className="text-gray-700 hover:text-[#C5A15C] transition-colors"
          >
            +1 (301)-755-8105
          </a>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="p-3 rounded-full bg-[#C5A15C]/10 text-[#C5A15C]">📞</span>
          <a 
            href="tel:+13017558202" 
            className="text-gray-700 hover:text-[#C5A15C] transition-colors"
          >
            +1(301)-755-8202
          </a>
        </div>
        <div className="flex items-start gap-3 ">
          <span className="p-3 rounded-full bg-[#C5A15C]/10 text-[#C5A15C]">🌐</span>
          <a href="http://www.wellglobalinc.com/" className=" pt-2 hover:underline text-blue-600">
            www.wellglobalinc.com
          </a>
        </div>
        
      </div>


     
    </div>
  </div>
</section>

    </>
  )
}

export default ContactSection