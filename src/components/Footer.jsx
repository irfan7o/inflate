import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer 
      className="relative overflow-hidden"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Footer Content */}
      <div className="bg-white py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Brand Section */}
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/Logo.svg" 
                  alt="Inflate Logo" 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Inflate</h3>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center md:justify-end items-center space-x-8 mb-6 md:mb-0">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                {t('home')}
              </Link>
              <Link to="/calculator" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                {t('calculator')}
              </Link>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                {t('inflationRates')}
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                {t('investment')}
              </a>
              <a href="#" className="font-medium transition-all duration-200 bg-gradient-to-r from-[#0044eb] via-purple-600 to-pink-500 bg-clip-text text-transparent hover:from-[#0033cc] hover:via-purple-700 hover:to-pink-600">
                {t('askAI')}
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                {t('pricing')}
              </a>
            </nav>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-50 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-2 md:mb-0">
              © 2025. {t('allRightsReserved')}
            </div>
            <div className="flex items-center space-x-1">
              <span>{t('designedDevelopedBy')}</span>
              <a 
                href="https://ko-fi.com/funwkwk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0044eb] hover:text-[#0033cc] transition-colors"
              >
                @funwkwk
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
