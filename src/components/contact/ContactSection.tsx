
const ContactSection = () => {
  return (
    <>
     <section className="bg-gray-50 py-12">
  <div className="max-w-6xl mx-auto px-4 text-center">
    {/* Heading */}
    <h2 className="text-3xl font-bold text-[#046381] mb-4">Get in Touch</h2>
    <p className="text-gray-600 mb-12">
      Reach out to us using the details below.
    </p>

    {/* Contact Cards */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Left Image */}
      <div className="flex justify-start">
        <img
          src="/imgs/article-thumb-10.webp"
          alt="Meeting"
          className="rounded-2xl shadow-lg w-[90%] h-[280px] object-cover"
        />
      </div>

      {/* Contact Info */}
      <div className="bg-white p-8 rounded-2xl shadow-md text-left">
        <h3 className="text-xl font-semibold text-[#046381] mb-4">Contact Information</h3>
        
        <div className="flex items-center gap-3 mb-4">
          <span className="p-3 rounded-full bg-[#046381]/10 text-[#046381]">
            📧
          </span>
          <p className="text-gray-700">info@aamiglobal.com</p>
        </div>

      </div>

      {/* Right Image */}
      <div className="flex justify-center md:col-span-2">
        <img
          src="/imgs/article-thumb-5.webp"
          alt="Team discussion"
          className="rounded-2xl shadow-lg w-full sm:w-[90%] h-[380px] object-cover"
        />
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default ContactSection