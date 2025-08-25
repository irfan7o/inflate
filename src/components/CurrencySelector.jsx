import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ChevronDown } from 'lucide-react';

const CurrencySelector = ({ currencies, selectedCurrency, onCurrencyChange }) => {
  const currencyNames = {
    IDR: 'Indonesian Rupiah',
    USD: 'US Dollar',
    GBP: 'British Pound',
    JPY: 'Japanese Yen',
    EUR: 'Euro'
  };

  return (
    <motion.div 
      className="card"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <div className="flex items-center space-x-3 mb-4">
        <DollarSign className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-white">Currency</h3>
      </div>
      
      <div className="relative">
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="w-full bg-dark-200 border border-gray-600 rounded-lg px-4 py-3 text-text-primary focus:border-primary focus:outline-none appearance-none cursor-pointer"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency} className="bg-dark-200">
              {currency} - {currencyNames[currency]}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default CurrencySelector;