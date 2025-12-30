import React from "react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div className="relative">
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{ paddingBottom: "125%" }}
            >
              <img
                alt="Joojo Dadson"
                className="absolute inset-0 w-full h-full object-cover object-top"
                src="/images/joojo.jpg"
              />
            </div>

            <div className="absolute top-8 left-8 bg-white px-6 py-3 rounded-full shadow-lg">
              <p className="font-inter text-xs uppercase tracking-wide text-midnight font-medium">
                About the Ministry
              </p>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-midnight mb-6">
              Called to Worship
            </h1>

            <div className="space-y-6 font-source text-lg leading-relaxed text-gray-700">
              <p>
                Joojo Dadson is a gospel music minister and recording artiste with
                a heart for worship and a calling to lead God's people into
                deeper intimacy with the Father. Through music that glorifies
                His name, Joojo creates an atmosphere where believers can
                encounter God's presence and experience His transforming power.
              </p>

              <p>
                Born and raised in Ghana, West Africa, Joojo's musical journey
                began in the church, where the foundation of worship and
                thanksgiving was laid. Every song is crafted with
                intentionality, drawing from personal testimonies of God's
                faithfulness and the timeless truths found in Scripture.
              </p>

              <div className="border-l-4 border-gold-accent pl-6 my-8">
                <p className="font-cormorant italic text-2xl text-sky-blue leading-relaxed">
                  "Prayer is the heartbeat of a healthy soul that creates sounds of praise."
                </p>
              </div>

              <p>
                Joojo Dadson's music is a reflection of his journey through the highs and lows of life. With a voice that's both raw and refined, he births new songs of hope and redemption, beckoning listeners to join him on a path of healing and discovery. His Gospel-infused sound is a balm to the soul, a reminder of the power of faith to transform and uplift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MINISTRY VISION */}
      <section className="bg-section-gray py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-midnight mb-4">
              Ministry Vision
            </h2>
            <p className="font-source text-lg text-gray-600 max-w-2xl mx-auto">
              A commitment to worship that glorifies God and transforms lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CARD 1 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-sky-blue/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-music-2-line text-2xl text-sky-blue" />
              </div>
              <h3 className="font-inter text-xl font-semibold text-midnight mb-3">
                Worship Excellence
              </h3>
              <p className="font-source text-sm leading-relaxed text-gray-600">
                Creating music that honors God and ministers to His people with
                excellence and authenticity.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-sky-blue/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-heart-3-line text-2xl text-sky-blue" />
              </div>
              <h3 className="font-inter text-xl font-semibold text-midnight mb-3">
                Spiritual Edification
              </h3>
              <p className="font-source text-sm leading-relaxed text-gray-600">
                Building up believers through songs that strengthen faith and
                deepen relationship with Christ.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-sky-blue/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-global-line text-2xl text-sky-blue" />
              </div>
              <h3 className="font-inter text-xl font-semibold text-midnight mb-3">
                Kingdom Impact
              </h3>
              <p className="font-source text-sm leading-relaxed text-gray-600">
                Reaching nations with the gospel through worship music that
                transcends cultural boundaries.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-sky-blue/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-book-open-line text-2xl text-sky-blue" />
              </div>
              <h3 className="font-inter text-xl font-semibold text-midnight mb-3">
                Biblical Foundation
              </h3>
              <p className="font-source text-sm leading-relaxed text-gray-600">
                Rooting every song in Scripture, ensuring that truth and
                revelation flow through the music.
              </p>
            </div>
          </div>

          {/* QUOTE */}
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
              <p className="font-cormorant italic text-2xl text-midnight leading-relaxed mb-4">
                "Ascribe to the Lord, you heavenly beings, ascribe to the Lord glory and strength. Ascribe to the Lord the glory due his name;
    worship the Lord in the splendor of His holiness."
              </p>
              <p className="font-inter text-sm text-sky-blue font-medium">
                — Psalm 29:1–2
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
