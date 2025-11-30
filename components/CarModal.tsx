
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Gauge, Zap, Cog } from 'lucide-react';
import { Car, PricingMode, Language } from '../types';
import { translations } from '../translations';

interface CarModalProps {
  car: Car | null;
  pricingMode: PricingMode;
  lang: Language;
  onClose: () => void;
  onGoToDetails: (car: Car) => void;
}

const CarModal: React.FC<CarModalProps> = ({ car, pricingMode, lang, onClose, onGoToDetails }) => {
  if (!car) return null;
  const t = translations[lang];

  const displayPrice = pricingMode === 'rent' ? car.pricePerDay : car.priceToBuy;
  const priceLabel = pricingMode === 'rent' ? t.inventory.per_day : t.inventory.total_price;

  return (
    <AnimatePresence>
      {car && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-brand-gray border border-white/10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row relative"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-black/40 rounded-full text-white hover:bg-white hover:text-black transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image Section (40%) */}
              <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                <img 
                  src={car.imageUrl} 
                  alt={car.model} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-gray md:bg-gradient-to-r md:from-transparent md:to-brand-gray" />
              </div>

              {/* Info Section (60%) */}
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                <div className="mb-2">
                   <span className="text-accent-blue text-xs font-bold uppercase tracking-widest px-2 py-1 bg-accent-blue/10 rounded mb-2 inline-block">
                     {car.type}
                   </span>
                   <h2 className="text-3xl font-display font-bold text-white mb-1">{car.make}</h2>
                   <h3 className="text-xl text-gray-400">{car.model}</h3>
                </div>

                <div className="grid grid-cols-3 gap-4 my-8 border-y border-white/10 py-6">
                   <div className="text-center">
                      <Gauge className="mx-auto mb-2 text-gray-500" size={20} />
                      <div className="text-white font-bold">{car.specs.speed0to60}</div>
                      <div className="text-xs text-gray-500 uppercase">{t.detail.specs.speed}</div>
                   </div>
                   <div className="text-center border-l border-white/10">
                      <Zap className="mx-auto mb-2 text-gray-500" size={20} />
                      <div className="text-white font-bold">{car.specs.horsepower} HP</div>
                      <div className="text-xs text-gray-500 uppercase">{t.detail.specs.power}</div>
                   </div>
                   <div className="text-center border-l border-white/10">
                      <Cog className="mx-auto mb-2 text-gray-500" size={20} />
                      <div className="text-white font-bold">{car.specs.transmission}</div>
                      <div className="text-xs text-gray-500 uppercase">{t.detail.specs.trans}</div>
                   </div>
                </div>

                <div className="flex items-center justify-between">
                   <div>
                      <div className="text-3xl font-bold text-white">${displayPrice.toLocaleString()}</div>
                      <div className="text-gray-500 text-sm uppercase">{priceLabel}</div>
                   </div>
                   
                   <button 
                     onClick={() => { onClose(); onGoToDetails(car); }}
                     className="bg-white text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors group"
                   >
                     {t.modal.view_details}
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CarModal;
