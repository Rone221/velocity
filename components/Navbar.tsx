
import React, { useState, useEffect } from 'react';
import { Menu, X, Car, Search, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, ViewState } from '../types';
import { translations } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  setView: (v: ViewState) => void;
  currentView: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, setView, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: ViewState, label: string }[] = [
    { id: 'home', label: t.home },
    { id: 'inventory', label: t.inventory },
    { id: 'about', label: t.about },
    { id: 'contact', label: t.contact },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/5 ${
          scrolled ? 'bg-brand-dark/80 backdrop-blur-xl py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="p-2 bg-white text-black rounded-lg group-hover:scale-105 transition-transform duration-300">
              <Car size={20} strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-white">
              VELOCITY
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 relative group ${
                  currentView === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-300 ${
                  currentView === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="text-white hover:text-accent-blue transition-colors flex items-center gap-1 text-sm font-bold"
            >
              <Globe size={16} />
              {lang.toUpperCase()}
            </button>
            
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors duration-300">
              {t.signin}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-white flex gap-4 items-center">
             <button 
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="text-white font-bold text-xs border border-white/20 px-2 py-1 rounded"
            >
              {lang.toUpperCase()}
            </button>
            <Menu size={28} onClick={() => setMobileMenuOpen(true)} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-dark flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/20 hover:bg-white/10 text-white"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item, i) => (
                <motion.button 
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`font-display text-4xl font-bold hover:text-gray-400 ${
                     currentView === item.id ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <motion.button 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.4 }}
                 className="mt-8 bg-white text-black px-8 py-3 rounded-full text-lg font-bold"
              >
                {t.signin}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
