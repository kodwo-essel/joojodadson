import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Music', path: '/music' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isWhiteLogo = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navBg = !isWhiteLogo ? 'bg-white shadow-md' : 'bg-transparent';
  const logoColor = !isWhiteLogo ? 'text-midnight' : 'text-white';
  const buttonIconColor = !isWhiteLogo ? 'text-midnight' : 'text-white';

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;

    if (!isWhiteLogo) {
      return isActive
        ? 'text-sky-blue'
        : 'text-midnight hover:text-sky-blue';
    }

    return isActive
      ? 'text-sky-blue'
      : 'text-white hover:text-sky-blue';
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link to="/" className="z-50">
              <span
                className={`text-2xl font-bold tracking-wide transition-colors duration-200 ${logoColor}`}
                style={{ fontFamily: 'Dancing Script, cursive' }}
              >
                JoojoDadson
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-10">
              {NAV_ITEMS.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`font-inter text-sm font-medium transition-colors duration-200 whitespace-nowrap ${getLinkClasses(path)}`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <a
              href="https://youtu.be/rDpRnv9eXz8"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:block px-6 py-2.5 rounded-full font-inter text-sm font-medium transition-colors duration-300 whitespace-nowrap
                ${
                  isWhiteLogo
                    ? 'bg-sky-blue text-white hover:bg-white hover:text-midnight'
                    : 'bg-sky-blue text-white hover:bg-midnight'
                }
              `}
            >
              Listen Now
            </a>

            {/* MOBILE TOGGLE */}
            <button
              className={`lg:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${buttonIconColor}`}
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              <span
                className={`w-6 h-0.5 bg-current transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 lg:hidden transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-8 items-center text-center">
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-inter text-lg font-medium transition-colors ${getLinkClasses(path)}`}
              >
                {label}
              </Link>
            ))}
          </div>

          <a
            href="https://youtu.be/rDpRnv9eXz8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 bg-sky-blue text-white px-6 py-3 rounded-full font-inter text-sm font-medium hover:bg-midnight transition-colors"
          >
            Listen Now
          </a>

          <div className="mt-auto pb-10 flex flex-col items-center">
            <p className="text-midnight/60 font-inter text-sm mb-4">
              Stay Connected
            </p>
            <div className="flex gap-4">
              {['youtube', 'instagram', 'facebook', 'tiktok'].map((icon) => (
                <i
                  key={icon}
                  className={`ri-${icon}-fill text-2xl text-midnight hover:text-sky-blue transition-colors`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
}
