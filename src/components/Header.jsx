import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ID', name: 'Indonesia' }
  ];

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setShowLanguageDropdown(false);
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 px-6 py-4 transition-colors duration-200"
      style={{ 
        backgroundColor: '#FFFFFF'
      }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Inflate
            </h1>
          </div>
        </div>
        
        {/* Centered Navigation Menu */}
        <nav className="flex items-center space-x-8">
          <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
            {t('calculator')}
          </button>
          <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
            {t('inflationRates')}
          </button>
          <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
            {t('investment')}
          </button>
          <button className="font-medium transition-all duration-200 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent hover:from-blue-700 hover:via-purple-700 hover:to-pink-600">
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
                    currentLanguage === lang.code ? 'text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;