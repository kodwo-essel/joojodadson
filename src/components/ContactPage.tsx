import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-section-neutral to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-midnight mb-6">
            Get In Touch
          </h1>
          <p className="font-source-serif text-lg text-midnight/70 max-w-2xl mx-auto leading-relaxed">
            Have a question, prayer request, or ministry inquiry? I'd love to
            hear from you. Fill out the form below and I'll get back to you as
            soon as possible.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
            <form
              id="contact-form"
              data-readdy-form="true"
              className="space-y-6"
            >
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-inter text-sm font-medium text-midnight mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-midnight/20 rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-inter text-sm font-medium text-midnight mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-midnight/20 rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-inter text-sm font-medium text-midnight mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={500}
                  rows={6}
                  placeholder="Share your message here (max 500 characters)"
                  className="w-full px-4 py-3 border border-midnight/20 rounded-lg font-inter text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all resize-none"
                />
                <p className="text-xs text-midnight/50 mt-1 font-inter">
                  0/500 characters
                </p>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-sky-blue text-white px-8 py-4 rounded-full font-inter text-sm font-medium hover:bg-midnight transition-all duration-300 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* STAY CONNECTED */}
      <section className="py-16 bg-section-neutral">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-playfair text-3xl font-bold text-midnight mb-6">
            Stay Connected
          </h2>
          <p className="font-source-serif text-midnight/70 mb-8">
            Follow the ministry on social media for updates, new releases, and
            worship moments
          </p>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.youtube.com/@JoojoDadson"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-midnight hover:bg-sky-blue hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
            >
              <i className="ri-youtube-fill text-2xl" />
            </a>

            <a
              href="https://www.instagram.com/joojodadson"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-midnight hover:bg-sky-blue hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
            >
              <i className="ri-instagram-fill text-2xl" />
            </a>

            <a
              href="https://www.facebook.com/joojodadson"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-midnight hover:bg-sky-blue hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
            >
              <i className="ri-facebook-fill text-2xl" />
            </a>

            <a
              href="https://www.tiktok.com/@joojodadson"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-midnight hover:bg-sky-blue hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
            >
              <i className="ri-tiktok-fill text-2xl" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
