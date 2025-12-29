import { useState, FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Worship Background"
          className="w-full h-full object-cover object-center"
          src="/images/join.jpg"
        />
        <div className="absolute inset-0 bg-midnight/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-white mb-6">
          Join the Worship
        </h2>
        <p className="font-source text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Stay connected with the ministry. Receive updates on new releases, upcoming
          events, and inspirational messages delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full font-inter text-sm bg-white text-midnight focus:outline-none focus:ring-2 focus:ring-sky-blue"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-sky-blue text-white px-8 py-4 rounded-full font-inter text-sm font-medium hover:bg-midnight transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line text-base"></i>
              </div>
            </button>
          </div>
          {message && (
            <p className="mt-4 text-white font-inter text-sm">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
