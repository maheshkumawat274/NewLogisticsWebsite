

export default function CareerHero() {
  return (
    <div
      className="relative w-full h-[60vh] md:h-[80vh] bg-cover"
      style={{
        backgroundImage: `url('/imgs/1697045559589.jpeg')`,
        backgroundPosition:' bottom center'
      }}
    >

      {/* Overlay with text */}
     {/* Black opacity footer with centered text */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center text-center">
        <h2 className="text-white text-3xl sm:text-5xl font-bold">
         Career Opportunities
        </h2>
      </div>
    </div>
  );
}
