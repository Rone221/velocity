
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, CreditCard, User, Calendar, ShieldCheck } from 'lucide-react';
import { Car, Language } from '../types';
import { translations } from '../translations';

interface CheckoutProps {
  car: Car;
  lang: Language;
  onBack: () => void;
  onComplete: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ car, lang, onBack, onComplete }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const t = translations[lang].checkout;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4); // Success state
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 flex justify-center">
      <div className="w-full max-w-4xl">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
           <button onClick={onBack} className="p-2 bg-white/5 rounded-full hover:bg-white/10">
             <ArrowLeft size={20} />
           </button>
           <h1 className="text-3xl font-display font-bold">{t.title}</h1>
        </div>

        {/* Stepper */}
        <div className="flex items-center mb-12 relative">
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-white/10 -z-10"></div>
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                step >= s ? 'bg-accent-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-brand-gray text-gray-500 border border-white/10'
              }`}>
                {step > s ? <Check size={16} /> : s}
              </div>
              <span className="mt-2 text-xs uppercase tracking-widest text-gray-500">
                {s === 1 ? t.step1 : s === 2 ? t.step2 : t.step3}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode='wait'>
              
              {/* STEP 1: Summary */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-brand-gray border border-white/10 rounded-3xl p-8"
                >
                  <h2 className="text-xl font-bold mb-6">{t.step1}</h2>
                  <div className="flex gap-6 mb-8">
                    <img src={car.imageUrl} className="w-32 h-24 object-cover rounded-xl" alt="Car" />
                    <div>
                      <h3 className="font-display font-bold text-2xl">{car.make} {car.model}</h3>
                      <p className="text-gray-400 text-sm">{car.year} • {car.type}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-gray-400">Duration</span>
                      <span className="font-bold">3 {t.days}</span>
                    </div>
                    <div className="flex justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-gray-400">Rate</span>
                      <span className="font-bold">${car.pricePerDay} / day</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-white/10">
                    <span className="text-lg text-gray-400">{t.total}</span>
                    <span className="text-3xl font-bold text-accent-blue">${car.pricePerDay * 3}</span>
                  </div>

                  <button onClick={handleNext} className="w-full mt-8 bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
                    {t.form.next}
                  </button>
                </motion.div>
              )}

              {/* STEP 2: Details */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-brand-gray border border-white/10 rounded-3xl p-8"
                >
                  <h2 className="text-xl font-bold mb-6">{t.step2}</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-2">
                         <label className="text-xs text-gray-500 uppercase">{t.form.name}</label>
                         <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all" />
                       </div>
                       <div className="space-y-2">
                         <label className="text-xs text-gray-500 uppercase">{t.form.phone}</label>
                         <input type="tel" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all" />
                       </div>
                    </div>
                    <div className="space-y-2">
                         <label className="text-xs text-gray-500 uppercase">{t.form.email}</label>
                         <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all" />
                    </div>
                    <div className="space-y-2">
                         <label className="text-xs text-gray-500 uppercase">{t.form.notes}</label>
                         <textarea className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white h-32 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue transition-all" />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button onClick={() => setStep(1)} className="flex-1 bg-transparent border border-white/20 text-white font-bold py-4 rounded-xl hover:bg-white/5 transition-colors">
                      {t.form.back}
                    </button>
                    <button onClick={handleNext} className="flex-1 bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
                      {t.form.next}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Payment/Confirm */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-brand-gray border border-white/10 rounded-3xl p-8"
                >
                  <h2 className="text-xl font-bold mb-6">{t.step3}</h2>
                  <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-6 rounded-2xl mb-6 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-6 opacity-20"><CreditCard size={64} /></div>
                     <div className="text-gray-400 text-sm mb-8">Secure Payment</div>
                     <div className="text-2xl font-mono tracking-wider mb-4">**** **** **** 4242</div>
                     <div className="flex justify-between text-sm">
                       <span>John Doe</span>
                       <span>12/25</span>
                     </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl mb-8">
                     <ShieldCheck className="text-yellow-500 shrink-0" size={20} />
                     <p className="text-sm text-yellow-200/80">
                       A hold of $2,000 will be placed on your card for security deposit. No charge is made until vehicle pickup.
                     </p>
                  </div>

                  <button 
                    onClick={handleConfirm} 
                    disabled={loading}
                    className="w-full bg-accent-blue text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-all flex justify-center items-center gap-2"
                  >
                    {loading ? <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></span> : t.form.confirm}
                  </button>
                </motion.div>
              )}

               {/* STEP 4: Success */}
               {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-gray border border-white/10 rounded-3xl p-12 text-center"
                >
                   <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                     <Check size={40} className="text-green-500" />
                   </div>
                   <h2 className="text-3xl font-display font-bold mb-4">{t.success_title}</h2>
                   <p className="text-gray-400 mb-8">
                     {t.success_msg}
                   </p>
                   <button onClick={onComplete} className="bg-white text-black px-8 py-3 rounded-full font-bold">
                     Return Home
                   </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Sidebar Summary */}
          {step < 4 && (
            <div className="lg:col-span-1 hidden lg:block">
               <div className="sticky top-32 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <h4 className="font-bold mb-4 border-b border-white/10 pb-4">Order Summary</h4>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">{car.model} x 3 days</span>
                    <span>${car.pricePerDay * 3}</span>
                  </div>
                   <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Taxes & Fees</span>
                    <span>$120</span>
                  </div>
                   <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Insurance</span>
                    <span>Included</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${car.pricePerDay * 3 + 120}</span>
                  </div>
               </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Checkout;
