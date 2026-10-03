import DownloadSection from './components/Download';
import Faq from './components/Faq';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Steps from './components/Steps';
import Tour from './components/Tour';

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <main id="main">
        <Hero />
        <Features />
        <Tour />
        <Steps />
        <DownloadSection />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
