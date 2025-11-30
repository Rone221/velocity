
import React from 'react';
import { motion } from 'framer-motion';
import { Car, PricingMode } from '../types';
import { Gauge, Zap, Calendar, ArrowUpRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
  pricingMode: PricingMode;
  onClick: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, pricingMode, onClick }) => {
  
  const displayPrice = pricingMode === 'rent' ? car.pricePerDay : car.priceToBuy;
  const priceLabel = pricingMode === 'rent' ? '/ day' : 'Total';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative w-full bg-brand-gray rounded-3xl overflow-hidden border border-white/5 shadow-lg shadow-black/50 cursor-pointer"
      onClick={() => onClick(car)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img 
          src={car.imageUrl} 
          alt={car.model}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gray via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider">
          {car.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">{car.make}</h3>
            <h2 className="text-2xl font-display font-bold text-white leading-tight">{car.model}</h2>
          </div>
          <div className="bg-white/5 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Specs Mini Grid */}
        <div className="grid grid-cols-3 gap-2 mb-6 border-t border-white/10 pt-4">
          <div className="flex flex-col gap-1">
             <Gauge size={16} className="text-gray-500" />
             <span className="text-xs text-gray-400">0-60</span>
             <span className="text-sm font-bold text-white">{car.specs.speed0to60}</span>
          </div>
          <div className="flex flex-col gap-1">
             <Zap size={16} className="text-gray-500" />
             <span className="text-xs text-gray-400">Power</span>
             <span className="text-sm font-bold text-white">{car.specs.horsepower} HP</span>
          </div>
          <div className="flex flex-col gap-1">
             <Calendar size={16} className="text-gray-500" />
             <span className="text-xs text-gray-400">Year</span>
             <span className="text-sm font-bold text-white">{car.year}</span>
          </div>
        </div>

        {/* Price Action */}
        <div className="flex justify-between items-center">
           <div className="flex flex-col">
             <motion.div 
                key={pricingMode} 
                initial={{ opacity: 0, y: 5 }} 
                animate={{ opacity: 1, y: 0 }}
                className="text-accent-blue font-bold text-xl"
             >
               ${displayPrice.toLocaleString()}
             </motion.div>
             <span className="text-gray-500 text-xs uppercase tracking-wider">{priceLabel}</span>
           </div>
           <button className="px-4 py-2 bg-white text-black text-xs font-bold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 uppercase tracking-widest">
             Quick View
           </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
