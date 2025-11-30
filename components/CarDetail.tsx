
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Gauge, Zap, Calendar, CheckCircle, ShieldCheck, Cog } from 'lucide-react';
import { Car, Language } from '../types';
import { translations } from '../translations';

interface CarDetailProps {
  car: Car;
  lang: Language;
  onBack: () => void;
  onBook: () => void;
}

const CarDetail: React.FC<CarDetailProps> = ({ car, lang, onBack, onBook }) => {
  const t = translations[lang].detail;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-dark pt-20"
    >
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-24 left-6 z-40 p-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Hero Image Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={car.imageUrl} 
          alt={car.model}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-transparent to-brand-dark" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
           <div className="container mx-auto">
             <motion.div
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.3 }}
             >
               <span className="px-3 py-1 bg-accent-blue text-white text-xs font-bold rounded mb-4 inline-block">
                  {car.type}
               </span>
               <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-2 leading-none">
                 {car.make} <span className="text-gray-400">{car.model}</span>
               </h1>
             </motion.div>
           </div>
        </div>
      </div>

      {/* Details Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Specs */}
        <div className="lg:col-span-2 space-y-12">
           
           {/* Specs Grid */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: t.specs.speed, value: car.specs.speed0to60, icon: Gauge },
                { label: t.specs.max, value: car.specs.topSpeed, icon: Zap },
                { label: t.specs.power, value: `${car.specs.horsepower} HP`, icon: Cog },
                { label: t.specs.trans, value: car.specs.transmission, icon: ShieldCheck },
              ].map((spec, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                   <spec.icon className="text-accent-blue mb-3" size={24} />
                   <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{spec.label}</div>
                   <div className="text-lg font-bold text-white">{spec.value}</div>
                </div>
              ))}
           </div>

           {/* Description */}
           <div className="prose prose-invert max-w-none">
             <h3 className="text-2xl font-display font-bold mb-4 text-white">Engineering Masterpiece</h3>
             <p className="text-gray-400 leading-relaxed text-lg">
               The {car.make} {car.model} represents the pinnacle of {car.type.toLowerCase()} performance. 
               Engineered for those who refuse to compromise, it delivers an experience that visceral, precise, and unforgettably rapid.
               With a {car.specs.horsepower} horsepower engine, it redefines the laws of physics.
             </p>
           </div>
        </div>

        {/* Right Column: CTAs */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-6">
            
            {/* Rental Block */}
            <div className="bg-brand-gray border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />
               <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <Calendar className="text-accent-blue" size={20} />
                 Rent this Vehicle
               </h3>
               
               <div className="flex items-end gap-2 mb-8">
                 <span className="text-4xl font-bold text-white">${car.pricePerDay}</span>
                 <span className="text-gray-500 pb-1">{t.per_day}</span>
               </div>

               <div className="space-y-4 mb-8">
                 <div className="flex items-center gap-3 text-sm text-gray-400">
                   <CheckCircle size={16} className="text-green-400" />
                   <span>Insurance Included</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-gray-400">
                   <CheckCircle size={16} className="text-green-400" />
                   <span>24/7 Concierge Support</span>
                 </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                   <CheckCircle size={16} className="text-green-400" />
                   <span>Free Delivery (50 miles)</span>
                 </div>
               </div>

               <button 
                 onClick={onBook}
                 disabled={!car.available}
                 className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                   car.available 
                     ? 'bg-white text-black hover:bg-gray-200' 
                     : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                 }`}
               >
                 {car.available ? t.book_rental : t.booked}
               </button>
            </div>

            {/* Purchase Block */}
            <div className="bg-black/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
               <div className="flex justify-between items-center mb-4">
                 <span className="text-gray-400 text-sm font-medium">{t.buy_now}</span>
                 <span className="text-2xl font-bold text-white">${car.priceToBuy.toLocaleString()}</span>
               </div>
               <button className="w-full py-3 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-colors text-sm uppercase tracking-widest">
                 {t.inquire_buy}
               </button>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default CarDetail;
