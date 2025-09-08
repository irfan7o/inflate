import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import InflationCalculator from './components/InflationCalculator';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { inflationData } from './data/inflationData';

const AppContent = () => {
  const { colors } = useTheme();

  const currentCountryData = inflationData.Indonesia;

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200" style={{ backgroundColor: '#F9FBFC' }}>
      <Header />
      
      <main className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          {/* Calculator Section - Centered */}
          <div className="flex justify-center">
            <InflationCalculator
              countryData={currentCountryData}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;