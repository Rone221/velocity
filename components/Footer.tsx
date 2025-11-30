
import React from 'react';
import { Car, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

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
               {t.description}
             </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">{t.explore}</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">{t.links.fleet}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t.links.services}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t.links.experiences}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t.links.corporate}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">{t.legal}</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">{t.links.terms}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t.links.privacy}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{t.links.insurance}</li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6">{t.connect}</h4>
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
          <p>{t.copyright}</p>
          <p>{t.credit}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
