import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-dark">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          style={{ y: y1 }} 
          className="flex flex-col justify-center"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest border border-white/10 text-accent-blue uppercase">
              Premium Collection 2024
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8"
          >
            DRIVE THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              IMPOSSIBLE
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-md mb-10 leading-relaxed"
          >
            Experience the pinnacle of automotive engineering. 
            Rent or acquire the world's most exclusive vehicles with zero compromise.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 group">
              Browse Fleet
              <Zap size={18} className="group-hover:fill-black transition-colors" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
              How it works
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Image / Visual */}
        <motion.div 
          style={{ y: y2 }}
          className="relative hidden lg:block"
        >
           <motion.div
             initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
           >
             <img 
               src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop" 
               alt="Hero Car" 
               className="w-full h-auto object-cover rounded-3xl shadow-2xl shadow-blue-900/20"
             />
             
             {/* Floating Stats Card */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 1 }}
               className="absolute -bottom-10 -left-10 bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 w-64"
             >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-display font-bold text-xl">Tesla Plaid</h3>
                  <span className="text-green-400 text-xs font-bold border border-green-400/30 px-2 py-1 rounded">EV</span>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>0-60 mph</span>
                    <span className="text-white font-mono">1.99s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Top Speed</span>
                    <span className="text-white font-mono">200mph</span>
                  </div>
                </div>
             </motion.div>
           </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="text-white/50" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
