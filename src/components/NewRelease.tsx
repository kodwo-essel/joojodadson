export default function NewRelease() {
  return (
    <section className="bg-section-gray py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-inter text-xs uppercase tracking-widest text-gold-accent mb-3">
            NEW RELEASE
          </p>
          <div className="w-16 h-0.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="w-full">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-square">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/rDpRnv9eXz8"
                title="Aseda Nnwom - A Psalm of Thanksgiving"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div>
            <p className="font-inter text-xs uppercase tracking-wide text-gray-500 mb-4">
              Released January 2025
            </p>
            <h2 className="font-playfair text-4xl font-bold text-midnight mb-6">
              Aseda Nnwom
            </h2>
            <p className="font-source text-lg leading-relaxed text-gray-700 mb-8">
              A heartfelt psalm of thanksgiving that celebrates God's faithfulness and
              goodness. This worship anthem invites believers into a place of gratitude
              and praise, reminding us that in every season, there is always a reason to
              give thanks to the Lord.
            </p>

            <div className="mb-8">
              <p className="font-inter text-sm font-medium text-midnight mb-4">
                Stream on your favorite platform:
              </p>
              <div className="grid grid-cols-4 gap-4">
                <a
                  href="https://youtu.be/rDpRnv9eXz8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-300 hover:bg-red-500 hover:text-white"
                  aria-label="YouTube"
                >
                  <i className="ri-youtube-fill text-xl"></i>
                </a>
                <a
                  href="https://music.apple.com/gh/album/aseda-nnwom-a-psalm-of-thanksgiving-single/1851399894"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-300 hover:bg-pink-500 hover:text-white"
                  aria-label="Apple Music"
                >
                  <i className="ri-music-fill text-xl"></i>
                </a>
                <a
                  href="https://distrokid.com/hyperfollow/joojodadson/aseda-nnwom-a-psalm-of-thanksgiving/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-300 hover:bg-green-500 hover:text-white"
                  aria-label="Spotify"
                >
                  <i className="ri-spotify-fill text-xl"></i>
                </a>
                <a
                  href="https://distrokid.com/hyperfollow/joojodadson/aseda-nnwom-a-psalm-of-thanksgiving/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-300 hover:bg-orange-500 hover:text-white"
                  aria-label="Deezer"
                >
                  <i className="ri-music-2-fill text-xl"></i>
                </a>
              </div>
            </div>

            <div className="border-l-4 border-gold-accent pl-6">
              <p className="font-cormorant italic text-xl text-sky-blue leading-relaxed">
                "Give thanks to the Lord, for He is good; His love endures forever."
              </p>
              <p className="font-inter text-sm text-gray-600 mt-2">— Psalm 107:1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
