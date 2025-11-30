import React from 'react';
import { Car, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-white text-black rounded-lg">
                  <Car size={20} strokeWidth={2.5} />
                </div>
                <span className="font-display font-bold text-2xl tracking-tighter">
                  VELOCITY
                </span>
             </div>
             <p className="text-gray-500 text-sm leading-relaxed">
               Redefining the art of motion. The world's most exclusive fleet at your fingertips.
             </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Fleet</li>
              <li className="hover:text-white cursor-pointer transition-colors">Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Experiences</li>
              <li className="hover:text-white cursor-pointer transition-colors">Corporate</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Insurance Policy</li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6">Connect</h4>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                 <Instagram size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                 <Twitter size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                 <Linkedin size={18} />
               </a>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2024 Velocity Motors. All rights reserved.</p>
          <p>Designed with Passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
