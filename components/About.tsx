
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { translations } from '../translations';
import { Award, Users, Shield, Clock } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;

  const stats = [
    { label: t.stats_clients, value: '500+', icon: Users },
    { label: t.stats_fleet, value: '85', icon: Award },
    { label: t.stats_years, value: '12', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-20">
      
      {/* Intro Section */}
      <div className="container mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-accent-blue text-sm font-bold uppercase tracking-widest mb-4 block">Velocity Agency</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-none mb-8">
            WE CURATE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
              ADRENALINE.
            </span>
          </h1>
          <div className="h-1 w-24 bg-accent-blue mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
            {t.story_text}
          </p>
        </motion.div>
      </div>

      {/* Visual Break */}
      <div className="w-full h-[60vh] relative mb-24 overflow-hidden">
         <motion.div 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
         >
           <img 
             src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" 
             alt="Luxury Garage" 
             className="w-full h-full object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
         </motion.div>
         
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center">
               {stats.map((stat, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.2 }}
                 >
                    <stat.icon size={40} className="mx-auto mb-4 text-white/80" />
                    <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm font-bold text-accent-blue uppercase tracking-widest">{stat.label}</div>
                 </motion.div>
               ))}
            </div>
         </div>
      </div>

      {/* Values Grid */}
      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-gray border border-white/5 p-12 rounded-3xl hover:border-white/10 transition-colors group">
               <Shield size={48} className="text-accent-blue mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-2xl font-display font-bold mb-4">Uncompromised Security</h3>
               <p className="text-gray-400 leading-relaxed">
                 Every transaction, rental, and drive is protected by our industry-leading insurance and privacy protocols.
                 Your discretion is our priority.
               </p>
            </div>
             <div className="bg-brand-gray border border-white/5 p-12 rounded-3xl hover:border-white/10 transition-colors group">
               <Users size={48} className="text-accent-blue mb-6 group-hover:scale-110 transition-transform" />
               <h3 className="text-2xl font-display font-bold mb-4">Concierge Service</h3>
               <p className="text-gray-400 leading-relaxed">
                 Not just a car. A lifestyle manager. We handle delivery, logistics, and even route planning for your perfect drive.
                 Available 24/7.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;
