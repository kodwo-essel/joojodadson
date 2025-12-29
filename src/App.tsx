import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import NewRelease from './components/NewRelease';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import MusicPage from './components/MusicPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function HomePage() {
  return (
    <>
      <Hero />
      <NewRelease />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
