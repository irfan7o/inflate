import React from 'react';
import Header from '../components/Header';
import InflationCalculator from '../components/InflationCalculator';
import Footer from '../components/Footer';
import { useTheme } from '../contexts/ThemeContext';
import { inflationData } from '../data/inflationData';

const Calculator = () => {
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

export default Calculator;
