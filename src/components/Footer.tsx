export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-playfair text-4xl font-bold mb-3">JOOJO DADSON</h3>
            <p className="font-cormorant italic text-lg text-sky-blue mb-6">
              Ministry of Worship & Thanksgiving
            </p>
            <p className="font-inter text-sm text-gray-400 leading-relaxed">
              Called to lead God's people into deeper worship through music that
              glorifies His name and edifies the spirit. Every song is a testimony of
              His faithfulness.
            </p>
          </div>

          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest mb-4">CONNECT</h4>
            <a
              href="mailto:contact@joojodadson.com"
              className="font-cormorant text-md text-sky-blue hover:text-white transition-colors duration-200 block mb-6"
            >
              contact@joojodadson.com
            </a>
            <h4 className="font-inter text-xs uppercase tracking-widest mb-4 mt-8">
              MINISTRY HUB
            </h4>
            <p className="font-inter text-sm text-gray-400 leading-relaxed">
              Accra, Ghana
              <br />
              West Africa
            </p>
          </div>

          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest mb-4">FOLLOW</h4>
            <div className="flex gap-5">
              <a
                href="https://youtu.be/rDpRnv9eXz8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-sky-blue hover:border-sky-blue transition-all duration-300"
                aria-label="YouTube"
              >
                <i className="ri-youtube-fill text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/joojodadson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-sky-blue hover:border-sky-blue transition-all duration-300"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href="https://www.facebook.com/joojodadson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-sky-blue hover:border-sky-blue transition-all duration-300"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                href="https://www.tiktok.com/@joojodadson"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-sky-blue hover:border-sky-blue transition-all duration-300"
                aria-label="TikTok"
              >
                <i className="ri-tiktok-fill text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-xs text-gray-500">
              © 2025 Joojo Dadson
            </p>
            <div className="flex gap-6">
              <a
                className="font-inter text-xs text-gray-500 hover:text-sky-blue transition-colors duration-200"
                href="/"
              >
                Privacy
              </a>
              <a
                className="font-inter text-xs text-gray-500 hover:text-sky-blue transition-colors duration-200"
                href="/"
              >
                Terms
              </a>
              <a
                className="font-inter text-xs text-gray-500 hover:text-sky-blue transition-colors duration-200"
                href="https://jimmyessel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Built By: Jimmy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
