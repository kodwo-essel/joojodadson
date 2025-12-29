export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight pt-20">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-midnight via-[#0d2847] to-midnight"></div>

      <div className="relative z-10 max-w-7xl mx-auto p-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white text-center lg:text-left order-1">
            <p className="font-inter text-sm uppercase tracking-widest mb-4">
              JOOJO DADSON
            </p>
            <h1 className="font-playfair text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Aseda Nnwom
            </h1>
            <p className="font-cormorant italic text-2xl text-sky-blue mb-10">
              A Psalm of Thanksgiving
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href="https://youtu.be/rDpRnv9eXz8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-blue text-white px-8 py-4 rounded-full font-inter text-sm font-medium hover:bg-white hover:text-midnight transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-play-fill text-base"></i>
                </div>
                Listen Now
              </a>
              <a
                href="https://youtu.be/rDpRnv9eXz8"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-sky-blue text-sky-blue px-8 py-4 rounded-full font-inter text-sm font-medium hover:bg-white hover:text-midnight hover:border-none transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-youtube-fill text-base"></i>
                </div>
                Watch Video
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="w-full max-w-md">
              <img
                alt="Aseda Nnwom Album Cover"
                className="w-full h-auto rounded-lg md:rounded-xl shadow-2xl"
                src="/images/aseda-nnwom.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
