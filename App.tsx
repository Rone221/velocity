
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarCard from './components/CarCard';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import Inventory from './components/Inventory';
import CarDetail from './components/CarDetail';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';
import CarModal from './components/CarModal';
import { CAR_DATA } from './constants';
import { Car, Language, ViewState, PricingMode } from './types';
import { translations } from './translations';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fr');
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  
  // State for Quick View Modal
  const [quickViewData, setQuickViewData] = useState<{car: Car, mode: PricingMode} | null>(null);

  const t = translations[language];

  // Navigation Logic
  const handleCarClickInInventory = (car: Car, mode: PricingMode) => {
    setQuickViewData({ car, mode });
  };

  const handleGoToDetails = (car: Car) => {
    setSelectedCar(car);
    setQuickViewData(null); // Close modal
    setCurrentView('detail');
    window.scrollTo(0,0);
  };

  const handleBook = () => {
    setCurrentView('checkout');
    window.scrollTo(0,0);
  };

  const handleCheckoutComplete = () => {
    setSelectedCar(null);
    setCurrentView('home');
  };

  const renderView = () => {
    switch(currentView) {
      case 'home':
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            key="home"
          >
            <Hero />
            
            {/* Quick Fleet Preview Section */}
            <section id="fleet" className="py-24 container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{t.home.fleet_title}</h2>
                  <p className="text-gray-400 max-w-lg">
                    {t.home.fleet_sub}
                  </p>
                </div>
                <button 
                  onClick={() => setCurrentView('inventory')}
                  className="mt-8 md:mt-0 text-white border-b border-white pb-1 hover:text-accent-blue hover:border-accent-blue transition-colors"
                >
                  {t.hero.cta_browse}
                </button>
              </div>

              {/* Limited Grid for Home - Defaults to Rent Mode for display */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {CAR_DATA.slice(0, 3).map(car => (
                    <CarCard 
                      key={car.id} 
                      car={car} 
                      pricingMode="rent"
                      onClick={(c) => handleCarClickInInventory(c, 'rent')} 
                    />
                  ))}
              </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-brand-gray relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <div className="container mx-auto px-6 relative z-10 text-center">
                  <h3 className="text-3xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600 mb-8">
                    "{t.home.quote}"
                  </h3>
                  <button 
                    onClick={() => setCurrentView('about')}
                    className="text-accent-blue font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
                  >
                    {t.home.read_story}
                  </button>
              </div>
            </section>
          </motion.div>
        );

      case 'inventory':
        return (
          <motion.div key="inventory" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Inventory lang={language} onCarClick={handleCarClickInInventory} />
          </motion.div>
        );

      case 'about':
        return (
          <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <About lang={language} />
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <Contact lang={language} />
          </motion.div>
        );

      case 'detail':
        return selectedCar ? (
          <CarDetail 
            key="detail" 
            car={selectedCar} 
            lang={language} 
            onBack={() => setCurrentView('inventory')} 
            onBook={handleBook}
          />
        ) : null;

      case 'checkout':
        return selectedCar ? (
           <motion.div key="checkout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <Checkout 
                car={selectedCar} 
                lang={language} 
                onBack={() => setCurrentView('detail')} 
                onComplete={handleCheckoutComplete}
             />
           </motion.div>
        ) : null;
        
      default:
        return null;
    }
  };

  return (
    <main className="bg-brand-dark min-h-screen text-white font-sans selection:bg-accent-blue selection:text-white overflow-x-hidden">
      <Navbar 
        lang={language} 
        setLang={setLanguage} 
        setView={setCurrentView} 
        currentView={currentView}
      />
      
      <AnimatePresence mode='wait'>
        {renderView()}
      </AnimatePresence>

      {/* Global Quick View Modal */}
      <CarModal 
        car={quickViewData?.car || null} 
        pricingMode={quickViewData?.mode || 'rent'} 
        lang={language}
        onClose={() => setQuickViewData(null)}
        onGoToDetails={handleGoToDetails}
      />

      <Footer />
      <AIChat />
    </main>
  );
};

export default App;
