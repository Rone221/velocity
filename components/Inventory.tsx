
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import CarCard from './CarCard';
import { Car, Language, PricingMode } from '../types';
import { CAR_DATA, CATEGORIES } from '../constants';
import { translations } from '../translations';

interface InventoryProps {
  lang: Language;
  onCarClick: (car: Car, mode: PricingMode) => void;
}

const Inventory: React.FC<InventoryProps> = ({ lang, onCarClick }) => {
  const t = translations[lang].inventory;
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [pricingMode, setPricingMode] = useState<PricingMode>('rent');

  const filteredCars = useMemo(() => {
    return CAR_DATA.filter(car => {
      const matchesCategory = activeCategory === 'All' || car.type === activeCategory;
      const matchesSearch = car.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            car.make.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-32 pb-20 min-h-screen container mx-auto px-6">
      
      {/* Header & Mode Switcher */}
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
        <div className="w-full lg:w-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            {t.title}
          </motion.h1>

          {/* The High-End Toggle Switch */}
          <div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md relative">
             <button
               onClick={() => setPricingMode('rent')}
               className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-colors ${pricingMode === 'rent' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
             >
               {t.mode_rent}
             </button>
             <button
               onClick={() => setPricingMode('buy')}
               className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-colors ${pricingMode === 'buy' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
             >
               {t.mode_buy}
             </button>
             
             {/* Animated Background Pill */}
             <motion.div 
               className="absolute top-1 bottom-1 bg-white rounded-full z-0"
               layoutId="toggleHighlight"
               initial={false}
               animate={{ 
                 left: pricingMode === 'rent' ? '4px' : '50%', 
                 width: pricingMode === 'rent' ? 'calc(50% - 4px)' : 'calc(50% - 4px)',
                 x: pricingMode === 'rent' ? 0 : 0
               }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
             />
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto items-end">
           <div className="relative w-full md:w-64 group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-accent-blue transition-colors" size={18} />
            <input 
              type="text" 
              placeholder={t.search_placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent-blue transition-all text-sm"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {CATEGORIES.map(cat => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                   activeCategory === cat 
                     ? 'bg-white text-black border-white' 
                     : 'bg-transparent text-gray-400 border-white/20 hover:border-white/40'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredCars.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCars.map(car => (
            <CarCard 
              key={car.id} 
              car={car} 
              pricingMode={pricingMode}
              onClick={(c) => onCarClick(c, pricingMode)} 
            />
          ))}
        </motion.div>
      ) : (
        <div className="py-20 text-center">
           <h3 className="text-xl text-gray-400">{t.no_results}</h3>
           <button 
             onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
             className="mt-4 text-accent-blue hover:underline"
           >
             Clear Filters
           </button>
        </div>
      )}
    </div>
  );
};

export default Inventory;
