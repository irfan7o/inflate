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

        {/* Section 3 - Automate Workflow */}
        <motion.div
          className="relative py-20 bg-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Automate Workflow,<br />
                Customize Everything.
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Speed up your setup with flexible blocks, live controls,<br />
                and a workspace that adapts to how you work.
              </p>
              <motion.button
                className="inline-flex items-center px-8 py-4 border-2 border-[#0044eb] text-[#0044eb] rounded-full text-lg font-semibold hover:bg-[#0044eb] hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 12l-2-2 1.41-1.41L8 9.17l4.59-4.58L14 6l-6 6z"/>
                </svg>
                See How It Works
              </motion.button>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Visual Task Editor */}
              <motion.div
                className="bg-gray-100 rounded-3xl p-8 relative overflow-hidden"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Visual Task Editor
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Drag, drop, and edit your task layout<br />
                    in real time — no code or clutter.
                  </p>
                  
                  {/* Mock Task Interface */}
                  <div className="space-y-4">
                    {/* Task Items */}
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="flex-1 bg-green-100 rounded-lg px-4 py-2">
                        <div className="text-sm text-gray-700">Task completed</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                      <div className="flex-1 bg-pink-100 rounded-lg px-4 py-2">
                        <div className="text-sm text-gray-700">In progress</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="flex-1 bg-yellow-100 rounded-lg px-4 py-2">
                        <div className="text-sm text-gray-700">Pending review</div>
                      </div>
                    </div>

                    {/* Task Cards Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="w-full h-3 bg-purple-200 rounded mb-2"></div>
                        <div className="w-3/4 h-2 bg-gray-200 rounded mb-1"></div>
                        <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="w-full h-3 bg-blue-200 rounded mb-2"></div>
                        <div className="w-3/4 h-2 bg-gray-200 rounded mb-1"></div>
                        <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Workflow Automation */}
              <motion.div
                className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 rounded-3xl p-8 text-white relative overflow-hidden"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Workflow Automation
                  </h3>
                  <p className="text-purple-100 mb-8">
                    Drag, drop, and edit your task layout<br />
                    in real time — no code or clutter.
                  </p>

                  {/* Integration Icons */}
                  <div className="space-y-6">
                    {/* Zentree Logo */}
                    <div className="flex items-center justify-center mb-8">
                      <div className="text-3xl font-bold">Zentree.</div>
                    </div>

                    {/* App Icons Grid */}
                    <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
                      {/* Purple asterisk icon */}
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 3l1.5 4.5H16l-3.5 2.5L14 15l-4-3-4 3 1.5-5L4 7.5h4.5L10 3z"/>
                        </svg>
                      </div>

                      {/* Blue arrow icon */}
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                        </svg>
                      </div>

                      {/* Red diamond icon */}
                      <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                        </svg>
                      </div>

                      {/* Orange play icon */}
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                      </div>

                      {/* Yellow circle icon */}
                      <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                        </svg>
                      </div>

                      {/* Empty space for balance */}
                      <div></div>
                    </div>
                  </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-xl"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Section 4 - Smarter Tools */}
        <motion.div
          className="relative py-20 bg-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Smarter Tools.<br />
                Better Workflow.
              </h2>
              <p className="text-xl text-gray-600 max-w-lg mx-auto">
                Work 10x faster with AI built for real<br />
                tasks — not just buzzwords.
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-16">
              
              {/* Top Section - AI that work Everything */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left - Text Content */}
                <motion.div
                  className="space-y-6"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    AI that work<br />
                    <span className="text-[#0044eb]">Everything</span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    One AI to power your entire workspace.<br />
                    Search, sync, and streamline across all<br />
                    your tools — in one click.
                  </p>
                </motion.div>

                {/* Right - Floating Workspace Visualization */}
                <motion.div
                  className="relative min-h-[400px] bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  {/* Central workspace element */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="bg-orange-400 rounded-2xl px-6 py-3 shadow-lg flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        </svg>
                      </div>
                      <span className="text-white font-semibold text-lg">workspace</span>
                    </div>
                  </motion.div>

                  {/* Integration floating label */}
                  <motion.div
                    className="absolute top-12 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="bg-pink-100 rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-pink-700 font-medium">integration</span>
                    </div>
                  </motion.div>

                  {/* Build floating label */}
                  <motion.div
                    className="absolute top-1/2 right-8 transform -translate-y-1/2"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="bg-yellow-100 rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-yellow-700 font-medium">build</span>
                    </div>
                  </motion.div>

                  {/* Connect floating label */}
                  <motion.div
                    className="absolute bottom-12 left-12"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="bg-red-100 rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-red-700 font-medium">connect</span>
                    </div>
                  </motion.div>

                  {/* Additional floating elements */}
                  <motion.div
                    className="absolute top-20 right-16 bg-purple-100 rounded-2xl p-3 shadow-sm"
                    animate={{ rotate: [0, 15, 0], y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <div className="w-8 h-2 bg-purple-500 rounded-full"></div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-20 right-12 bg-cyan-100 rounded-2xl p-3 shadow-sm"
                    animate={{ rotate: [0, -12, 0], x: [0, 8, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  >
                    <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                  </motion.div>

                  <motion.div
                    className="absolute top-24 left-12 bg-green-100 rounded-2xl p-2 shadow-sm"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  >
                    <div className="w-3 h-6 bg-green-500 rounded-full"></div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Bottom Section - Unified Search */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left - Search Interface with Integration Icons */}
                <motion.div
                  className="space-y-8"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  {/* Integration Icons */}
                  <div className="flex space-x-4 justify-center lg:justify-start">
                    <motion.div
                      className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </motion.div>

                    <motion.div
                      className="w-14 h-14 bg-[#0044eb] rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    >
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                      </svg>
                    </motion.div>

                    <motion.div
                      className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    >
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </motion.div>
                  </div>

                  {/* Search Interface */}
                  <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-3xl p-6 relative">
                    {/* Browser Window */}
                    <div className="bg-white rounded-xl shadow-sm">
                      {/* Browser Header */}
                      <div className="bg-gray-50 px-4 py-3 flex items-center space-x-2 rounded-t-xl">
                        <div className="flex space-x-1.5">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-white rounded-md px-3 py-1 mx-4">
                          <div className="w-16 h-2 bg-gray-300 rounded"></div>
                        </div>
                      </div>

                      {/* Search Results */}
                      <div className="p-6 space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <div className="w-5 h-5 bg-purple-500 rounded"></div>
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="w-40 h-3 bg-gray-300 rounded"></div>
                            <div className="w-28 h-2 bg-gray-200 rounded"></div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                            <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="w-36 h-3 bg-gray-300 rounded"></div>
                            <div className="w-24 h-2 bg-gray-200 rounded"></div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                            <div className="w-5 h-5 bg-pink-500 rounded"></div>
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="w-44 h-3 bg-gray-300 rounded"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right - Text Content */}
                <motion.div
                  className="space-y-6"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Unified <span className="text-pink-500">Search</span><br />
                    Across Tools
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Instantly search across Google Drive, GitHub,<br />
                    Salesforce, Figma, Dropbox, Notion, and more! No<br />
                    more switching tabs or digging through folders.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
