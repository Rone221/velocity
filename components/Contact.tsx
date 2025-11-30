
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { translations } from '../translations';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang].contact;

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-20 container mx-auto px-6 flex flex-col lg:flex-row gap-16">
       
       {/* Info Side */}
       <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-display font-bold mb-8">{t.title}</h1>
            <p className="text-gray-400 mb-12 text-lg">
              Visit our showroom or send us a digital inquiry. We typically reply within 15 minutes during business hours.
            </p>

            <div className="space-y-8">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Showroom</h4>
                    <p className="text-gray-400">1288 Brickell Avenue,<br/>Miami, FL 33131</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">+1 (305) 555-0123</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="text-accent-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email</h4>
                    <p className="text-gray-400">concierge@velocity.com</p>
                  </div>
               </div>
            </div>
          </motion.div>
       </div>

       {/* Form Side */}
       <div className="lg:w-2/3">
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-gray border border-white/5 p-8 md:p-12 rounded-3xl"
          >
             <h3 className="text-2xl font-bold mb-8">{t.form_title}</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.name}</label>
                   <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-accent-blue focus:outline-none transition-colors" />
                </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.email}</label>
                   <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-accent-blue focus:outline-none transition-colors" />
                </div>
             </div>
             
             <div className="space-y-2 mb-8">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.message}</label>
                <textarea rows={5} className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-accent-blue focus:outline-none transition-colors"></textarea>
             </div>

             <button type="button" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors flex justify-center items-center gap-2 group">
               {t.send}
               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </motion.form>
       </div>

    </div>
  );
};

export default Contact;
