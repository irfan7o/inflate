import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const CountrySelector = ({ countries, selectedCountry, onCountryChange, countryData }) => {
  const { colors } = useTheme();

  return (
    <motion.div 
      className="rounded-lg border p-6 hover:border-primary transition-colors duration-200"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border
      }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-3 mb-4">
        <Globe className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold" style={{ color: colors.text.primary }}>
          Select Country
        </h3>
      </div>
      
      <div className="relative">
        <select
          value={selectedCountry}
          onChange={(e) => onCountryChange(e.target.value)}
          className="w-full rounded-lg px-4 py-3 focus:border-primary focus:outline-none appearance-none cursor-pointer transition-colors"
          style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            color: colors.text.primary
          }}
        >
          {countries.map((country) => (
            <option key={country} value={country} style={{ backgroundColor: colors.surface }}>
              {countryData[country]?.flag} {country}
            </option>
          ))}
        </select>
        <ChevronDown 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none" 
          style={{ color: colors.text.secondary }}
        />
      </div>
    </motion.div>
  );
};

export default CountrySelector;