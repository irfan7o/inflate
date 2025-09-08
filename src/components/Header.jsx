import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const location = useLocation();

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ID', name: 'Indonesia' }
  ];

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setShowLanguageDropdown(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className="sticky top-0 z-50 px-6 py-4 transition-colors duration-200"
      style={{ 
        backgroundColor: '#FFFFFF'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src="/Logo.svg" 
              alt="Inflate Logo" 
              className="w-8 h-8"
            />
          </div>
          <div>
            <Link to="/">
              <h1 className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-[#0044eb] transition-colors duration-200">
                Inflate
              </h1>
            </Link>
          </div>
        </div>
        
        {/* Centered Navigation Menu */}
        <nav className="flex items-center space-x-8">
          <Link to="/calculator">
            <button className={`font-medium transition-all duration-200 px-4 py-2 rounded-full ${
              isActive('/calculator') 
                ? 'bg-black text-white' 
                : 'text-gray-700 hover:text-[#0044eb]'
            }`}>
              {t('calculator')}
            </button>
          </Link>
          <button className="text-gray-700 hover:text-[#0044eb] font-medium transition-colors duration-200">
            {t('inflationRates')}
          </button>
          <button className="text-gray-700 hover:text-[#0044eb] font-medium transition-colors duration-200">
            {t('investment')}
          </button>
          <button className="font-medium transition-all duration-200 bg-gradient-to-r from-[#0044eb] via-purple-600 to-pink-500 bg-clip-text text-transparent hover:from-[#0033cc] hover:via-purple-700 hover:to-pink-600">
            {t('askAI')}
          </button>
        </nav>

        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-gray-700 font-medium">{currentLanguage}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {/* Language Dropdown */}
          {showLanguageDropdown && (
            <motion.div
              className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200 ${
                    currentLanguage === lang.code ? 'text-[#0044eb] font-medium' : 'text-gray-700'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;