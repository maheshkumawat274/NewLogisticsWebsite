export default function ResponseHero() {
  return (
    <div
      className="relative w-full h-[60vh] md:h-[80vh] bg-cover"
      style={{
        backgroundImage: `url('/imgs/Untitled design.png')`
      }}
    >

      {/* Overlay with text */}
     {/* Black opacity footer with centered text */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center text-center">
        <h2 className="text-white text-2xl sm:text-4xl font-bold">
          Supplying fuels, fertilizers, and resources with global reliability.
        </h2>
      </div>
    </div>
  );
}
