import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const LandingPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200" style={{ backgroundColor: '#F9FBFC' }}>
      <Header />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-[#0044eb] via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Inflate
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('inflationCalculatorDescription')}
            </p>
            <motion.button
              className="bg-[#0044eb] hover:bg-[#0033cc] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
