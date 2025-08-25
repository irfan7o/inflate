import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import InflationCalculator from './components/InflationCalculator';
import HedgeRecommendations from './components/HedgeRecommendations';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { inflationData } from './data/inflationData';
import { hedgeAssets } from './data/hedgeAssets';

const AppContent = () => {
  const { colors } = useTheme();

  const currentCountryData = inflationData.Indonesia;
  const currentInflationRate = currentCountryData.data[currentCountryData.data.length - 1]?.rate || 0;

  return (
    <div className="min-h-screen transition-colors duration-200" style={{ backgroundColor: '#F9FBFC' }}>
      <Header />
      
      <main>
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Calculator Section */}
          <InflationCalculator
            countryData={currentCountryData}
          />
        </div>

        {/* Recommendations Section - Full Width */}
        <HedgeRecommendations
          hedgeAssets={hedgeAssets}
          inflationRate={currentInflationRate.toFixed(2)}
        />
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;