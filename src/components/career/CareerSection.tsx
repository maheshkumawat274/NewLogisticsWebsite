

export default function CareerSection() {
  return (
    <section className="py-16 bg-white px-4 sm:px-10">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch px-6">
        {/* Left Side Image */}
        <div className="flex">
          <img
            src="/imgs/how-asking-for-feedback-can-power-your-career-growth.jpg"
            alt="Abstract Shape"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Empowering Careers, Inspiring Growth
          </h2>
          <p className="text-md sm:text-lg mb-6">
            “Well Global Inc seeks talented, motivated, and dedicated individuals to join the team. Well Global Inc is committed to building a dynamic workforce of skilled professionals who aspire to grow, excel, and contribute to the success of Well Global Inc across its global operations.”
          </p>
          <p className="text-md sm:text-lg mb-6">
            “Trading at Well Global Inc is a fast-paced and rewarding career. Well Global Inc offers a broad range of technical and non-technical career opportunities for experienced professionals and motivated talents who aspire to thrive in the trading industry and advance their careers in the energy sector with Well Global Inc.”
          </p>
          
          <p className="text-md sm:text-lg mb-6">
            “Well Global Inc nurtures local talent in the trading sector through its dedicated Trading Academy. Well Global Inc’s Trading Academy provides specialized training and mentorship programs designed to help young professionals thrive and become leaders in the global trading industry under Well Global Inc’s guidance.”
          </p>
          
          

        </div>
      </div>
    </section>
  );
}
