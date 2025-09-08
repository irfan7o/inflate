import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const LandingPage = () => {
  const { t } = useLanguage();

  // Animation variants for floating icons
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants2 = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, -3, 3, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  const floatingVariants3 = {
    animate: {
      y: [0, -25, 0],
      rotate: [0, 8, -8, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200 bg-white">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-1 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 flex items-center min-h-[80vh]">
          <div className="w-full text-center">
            {/* Center Content */}
            <motion.div
              className="mb-16"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {t('calculator')} Ready
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Manage Your{' '}
                <span className="bg-gradient-to-r from-[#0044eb] via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Money.
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Track Inflation.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                No messy code. No cluttered design. Just an easy, effective way to stay on top of your inflation calculations.
              </p>

              <div className="flex justify-center">
                <motion.button
                  className="bg-[#0044eb] hover:bg-[#0033cc] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Tracking
                </motion.button>
              </div>
            </motion.div>

            {/* Dashboard Preview - Centered */}
            <motion.div
              className="relative flex justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Single Gradient Effect Behind Dashboard */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#0044eb]/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl opacity-20"></div>
              
              {/* Main Dashboard */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/Assets/682c7aeac73e6726cabe3776_dashboard.svg" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Dashboard Box Overlay */}
                <div className="absolute top-8 right-8 transform rotate-6">
                  <img 
                    src="/Assets/682c7aeaf87699baaaf4185b_dashboard-box3.svg" 
                    alt="Dashboard Widget" 
                    className="w-24 h-auto"
                  />
                </div>
              </div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-8 -left-8"
                variants={floatingVariants}
                animate="animate"
              >
                <div className="bg-yellow-400 p-4 rounded-2xl shadow-lg transform rotate-12">
                  <img 
                    src="/Assets/682c7aeabf7532477791fbcc_hero-icon1.svg" 
                    alt="Icon 1" 
                    className="w-8 h-8"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-20 -right-12"
                variants={floatingVariants2}
                animate="animate"
              >
                <div className="bg-green-400 p-4 rounded-2xl shadow-lg transform -rotate-12">
                  <img 
                    src="/Assets/682c7ae9177f9c04ed66fbf6_hero-icon2.svg" 
                    alt="Icon 2" 
                    className="w-8 h-8"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 left-8"
                variants={floatingVariants3}
                animate="animate"
              >
                <div className="bg-blue-400 p-4 rounded-2xl shadow-lg transform rotate-6">
                  <img 
                    src="/Assets/682c7ae93aa49a0a4b9abd3b_hero-icon4.svg" 
                    alt="Icon 4" 
                    className="w-8 h-8"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 -right-8"
                variants={floatingVariants}
                animate="animate"
              >
                <div className="bg-red-400 p-4 rounded-2xl shadow-lg transform -rotate-6">
                  <img 
                    src="/Assets/682c7ae93fbd8e292fcf695e_hero-icon5.svg" 
                    alt="Icon 5" 
                    className="w-8 h-8"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-12"
                variants={floatingVariants2}
                animate="animate"
              >
                <div className="bg-purple-400 p-4 rounded-2xl shadow-lg transform rotate-45">
                  <img 
                    src="/Assets/682c7ae92bcffeb5b604d515_hero-icon6.svg" 
                    alt="Icon 6" 
                    className="w-8 h-8"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Company Logos Section */}
        <motion.div
          className="relative py-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-gray-500 mb-8 text-lg">
              Transforming the Remote Working
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <img src="/Assets/682c7aeb276cd3aa846c8550_company-logo1.svg" alt="Company 1" className="h-8 grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="/Assets/682c7aeb0a3135e0647324e8_company-logo3.svg" alt="Company 3" className="h-8 grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="/Assets/682c7aeaaace9489bc5513d7_company-logo4.svg" alt="Company 4" className="h-8 grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="/Assets/682c7aea84ae2966ca5ae8bd_company-logo5.svg" alt="Company 5" className="h-8 grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="/Assets/682c7aea178abc5e863a1307_company-logo6.svg" alt="Company 6" className="h-8 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
        </motion.div>

        {/* Investment Product Section */}
        <motion.div
          className="relative py-20 bg-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Choose Your Investment Product
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* One-Click Customization */}
              <motion.div
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="mb-6">
                  <img 
                    src="/Assets/section-2/682c7aeb5ce12d84d2ef243b_use-case1.svg" 
                    alt="One-Click Customization" 
                    className="w-full h-48 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  One-Click<br />Customization
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Update colors, layouts, and components to match your brand.
                </p>
              </motion.div>

              {/* Flexible Task Views */}
              <motion.div
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="mb-6">
                  <img 
                    src="/Assets/section-2/682c7aeb2bcffeb5b604d616_use-case2.svg" 
                    alt="Flexible Task Views" 
                    className="w-full h-48 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Flexible<br />Task Views
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  List, board, or timeline views. Work the way that fits your flow.
                </p>
              </motion.div>

              {/* With Team Collaboration */}
              <motion.div
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="mb-6">
                  <img 
                    src="/Assets/section-2/682c7aeb773e5cce527565e4_use-case3.svg" 
                    alt="With Team Collaboration" 
                    className="w-full h-48 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  With Team<br />Collaboration
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Share updates, add comments, and keep everyone on the same page.
                </p>
              </motion.div>

              {/* Easy Task Assignment */}
              <motion.div
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <div className="mb-6">
                  <img 
                    src="/Assets/section-2/682c7af5750e0f9f63477f0d_use-case4.svg" 
                    alt="Easy Task Assignment" 
                    className="w-full h-48 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Easy Task<br />Assignment
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Assign work's, set deadlines, and track status in real time.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
