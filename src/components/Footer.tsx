import { ArrowUp, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white rounded-full shadow-lg hover:shadow-[#00B4D8]/50 transition-all duration-300 hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <footer className="bg-[#0F172A] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
              Built with
              <Heart className="text-red-500 inline animate-pulse" size={18} />
              by
              <span className="text-[#00B4D8] font-semibold">Dheenadayalan S</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
