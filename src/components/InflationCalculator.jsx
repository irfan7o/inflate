import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ArrowRight, TrendingUp, ChevronUp, ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const InflationCalculator = ({ countryData }) => {
  const { colors } = useTheme();
  const { t } = useLanguage();
  const [amount, setAmount] = useState('100');
  const [startYear, setStartYear] = useState(2000);
  const [endYear, setEndYear] = useState(2025);
  const [result, setResult] = useState(null);
  const [showStartYearPopup, setShowStartYearPopup] = useState(false);
  const [showEndYearPopup, setShowEndYearPopup] = useState(false);

  // Format number with thousands separator (dots)
  const formatInputAmount = (value) => {
    if (!value) return '';
    // Remove all non-digits
    const numericValue = value.toString().replace(/\D/g, '');
    // Add dots as thousands separator
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  // Handle amount input change
  const handleAmountChange = (e) => {
    const inputValue = e.target.value;
    // Remove all dots and non-digits, keep only numbers
    const numericValue = inputValue.replace(/\D/g, '');
    setAmount(numericValue);
  };

  // Handle amount increment/decrement
  const incrementAmount = () => {
    const currentAmount = parseInt(amount) || 0;
    const increment = currentAmount < 1000 ? 100 : currentAmount < 10000 ? 1000 : 10000;
    setAmount((currentAmount + increment).toString());
  };

  const decrementAmount = () => {
    const currentAmount = parseInt(amount) || 0;
    const decrement = currentAmount <= 1000 ? 100 : currentAmount <= 10000 ? 1000 : 10000;
    const newAmount = Math.max(0, currentAmount - decrement);
    setAmount(newAmount.toString());
  };

  const availableYears = countryData.data.map(item => item.year).sort();
  const minYear = Math.min(...availableYears);
  const maxYear = Math.max(...availableYears);

  const calculateInflation = () => {
    if (!amount || startYear >= endYear) return;

    const startAmount = parseFloat(amount);
    let currentValue = startAmount;
    const yearlyValues = [{ year: startYear, value: startAmount, rate: 0 }];

    // Calculate compound inflation from start year to end year
    for (let year = startYear + 1; year <= endYear; year++) {
      const yearData = countryData.data.find(item => item.year === year);
      if (yearData) {
        const inflationRate = yearData.rate / 100;
        currentValue = currentValue * (1 + inflationRate);
        yearlyValues.push({ 
          year, 
          value: currentValue, 
          rate: yearData.rate 
        });
      }
    }

    const totalInflation = ((currentValue - startAmount) / startAmount) * 100;
    const purchasingPowerLoss = ((startAmount / currentValue) * 100) - 100;
    const averageInflation = totalInflation / (endYear - startYear);

    // Get inflation rates for the period
    const inflationRates = countryData.data
      .filter(item => item.year >= startYear && item.year <= endYear)
      .map(item => ({ year: item.year, rate: item.rate }));

    setResult({
      originalAmount: startAmount,
      inflatedAmount: currentValue,
      totalInflation: totalInflation,
      purchasingPowerLoss: Math.abs(purchasingPowerLoss),
      yearRange: endYear - startYear,
      averageInflation: averageInflation,
      yearlyValues: yearlyValues,
      inflationRates: inflationRates
    });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: countryData.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div>
      {/* Title and Description - Outside Card */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t('inflationCalculatorTitle')}
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {t('inflationCalculatorDescription')}
        </p>
      </div>

      {/* Calculator Card */}
      <motion.div
        className="rounded-2xl p-8"
        style={{
          backgroundColor: '#FFFFFF'
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
      <div className="space-y-6 mb-6">
        {/* Input and Button Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium mb-3 text-gray-700">
              {t('amount')} ({countryData.currencySymbol})
            </label>
            <div className="flex rounded-lg overflow-hidden h-12" style={{ backgroundColor: '#F9FAFB' }}>
              <input
                type="text"
                value={formatInputAmount(amount)}
                onChange={handleAmountChange}
                className="flex-1 px-4 py-3 focus:outline-none text-gray-900"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  // Hide number input arrows
                  MozAppearance: 'textfield',
                  WebkitAppearance: 'none',
                }}
                placeholder="Enter amount"
              />
              <div className="flex flex-col" style={{ backgroundColor: '#F9FAFB' }}>
                <button
                  type="button"
                  onClick={incrementAmount}
                  className="px-2 py-1 transition-all duration-200 hover:bg-blue-50 text-gray-500 hover:text-[#0044eb] flex-1 flex items-center justify-center"
                >
                  <ChevronUp className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={decrementAmount}
                  className="px-2 py-1 transition-all duration-200 hover:bg-blue-50 text-gray-500 hover:text-[#0044eb] flex-1 flex items-center justify-center"
                >
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>
            <style jsx>{`
              input[type="text"]::-webkit-outer-spin-button,
              input[type="text"]::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
              input[type="text"] {
                -moz-appearance: textfield;
              }
            `}</style>
          </div>

        {/* Start Year */}
        <div className="relative">
          <label className="block text-sm font-medium mb-3 text-gray-700">
            {t('startYear')}
          </label>
          <button
            type="button"
            onClick={() => setShowStartYearPopup(true)}
            className="w-full rounded-lg px-4 py-3 text-center font-medium focus:outline-none focus:ring-0 transition-all duration-200 text-gray-900 hover:bg-gray-100 h-12 border-0"
            style={{ 
              backgroundColor: '#F9FAFB',
              boxShadow: 'none',
              outline: 'none'
            }}
          >
            {startYear}
          </button>
          
          {/* Start Year Popup */}
          <AnimatePresence>
            {showStartYearPopup && (
              <motion.div 
                className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowStartYearPopup(false)}
              >
              <motion.div 
                className="rounded-xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden"
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">
                    Select Start Year
                  </h3>
                  <p className="text-sm mt-1 text-gray-600">
                    Choose the starting year for inflation calculation
                  </p>
                </div>
                
                {/* Content */}
                <div className="p-6 max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-5 gap-2">
                    {availableYears.map(year => (
                      <motion.button
                        key={year}
                        onClick={() => {
                          setStartYear(year);
                          if (endYear <= year) {
                            // Find the next available year after the selected start year
                            const nextYear = availableYears.find(y => y > year);
                            if (nextYear) {
                              setEndYear(nextYear);
                            }
                          }
                          setShowStartYearPopup(false);
                        }}
                        className={`p-3 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-0 ${
                          year === startYear 
                            ? 'bg-[#0044eb] text-white shadow-lg transform scale-105' 
                            : 'bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 hover:shadow-md hover:transform hover:scale-105'
                        }`}
                        style={{ outline: 'none', boxShadow: year === startYear ? '0 4px 14px 0 rgba(0, 68, 235, 0.39)' : 'none' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {year}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-200">
                  <button
                    onClick={() => setShowStartYearPopup(false)}
                    className="w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-0"
                    style={{ outline: 'none' }}
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* End Year */}
        <div className="relative">
          <label className="block text-sm font-medium mb-3 text-gray-700">
            {t('endYear')}
          </label>
          <button
            type="button"
            onClick={() => setShowEndYearPopup(true)}
            className="w-full rounded-lg px-4 py-3 text-center font-medium focus:outline-none focus:ring-0 transition-all duration-200 text-gray-900 hover:bg-gray-100 h-12 border-0"
            style={{ 
              backgroundColor: '#F9FAFB',
              boxShadow: 'none',
              outline: 'none'
            }}
          >
            {endYear}
          </button>
          
          {/* End Year Popup */}
          <AnimatePresence>
            {showEndYearPopup && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowEndYearPopup(false)}
            >
              <motion.div 
                className="rounded-xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden"
                style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">
                    Select End Year
                  </h3>
                  <p className="text-sm mt-1 text-gray-600">
                    Choose the ending year for inflation calculation
                  </p>
                </div>
                
                {/* Content */}
                <div className="p-6 max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-5 gap-2">
                    {availableYears.map(year => (
                      <motion.button
                        key={year}
                        onClick={() => {
                          if (year > startYear) {
                            setEndYear(year);
                            setShowEndYearPopup(false);
                          }
                        }}
                        className={`p-3 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-0 ${
                          year === endYear 
                            ? 'bg-[#0044eb] text-white shadow-lg transform scale-105' 
                            : year <= startYear
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                            : 'bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 hover:shadow-md hover:transform hover:scale-105'
                        }`}
                        style={{ 
                          outline: 'none', 
                          boxShadow: year === endYear ? '0 4px 14px 0 rgba(59, 130, 246, 0.39)' : 'none' 
                        }}
                        disabled={year <= startYear}
                        whileHover={year > startYear ? { scale: 1.05 } : {}}
                        whileTap={year > startYear ? { scale: 0.95 } : {}}
                      >
                        {year}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-200">
                  <button
                    onClick={() => setShowEndYearPopup(false)}
                    className="w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-0"
                    style={{ outline: 'none' }}
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Calculate Button */}
        <div>
          <label className="block text-sm font-medium mb-3 text-gray-700">
            &nbsp;
          </label>
          <button
            onClick={calculateInflation}
            disabled={!amount || startYear >= endYear}
            className="w-full bg-[#0044eb] hover:bg-[#0033cc] text-white px-6 py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 font-semibold h-12"
          >
            <Calculator className="w-5 h-5" />
            <span>{t('calculate')}</span>
          </button>
        </div>

        </div>
      </div>

      {/* Results */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl p-6 border"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#E5E7EB'
          }}
        >
          <h3 className="text-xl font-bold mb-6 text-gray-900">
            Calculation Results
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <p className="text-sm mb-2 text-gray-600">
                {t('originalValue')} ({startYear})
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(result.originalAmount)}
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-[#0044eb]" />
            </div>
            
            <div className="text-center">
              <p className="text-sm mb-2 text-gray-600">
                {t('equivalentValue')} ({endYear})
              </p>
              <p className="text-2xl font-bold text-red-600">
                {formatCurrency(result.inflatedAmount)}
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-sm mb-2 text-gray-600">
                {t('inflationRate')}
              </p>
              <p className="text-2xl font-bold text-red-600">
                +{result.totalInflation.toFixed(2)}%
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div 
              className="rounded-xl p-5"
              style={{
                backgroundColor: '#FEF2F2',
                border: '1px solid #FECACA'
              }}
            >
              <div className="flex items-center space-x-2 mb-3">
                <TrendingUp className="w-5 h-5 text-red-600" />
                <h4 className="font-bold text-red-600">
                  {t('purchasingPowerLoss')}
                </h4>
              </div>
              <p className="text-3xl font-bold mb-3 text-red-600">
                -{result.purchasingPowerLoss.toFixed(2)}%
              </p>
              <p className="text-sm text-gray-700">
                Your money lost {result.purchasingPowerLoss.toFixed(1)}% of its purchasing power over {result.yearRange} years.
              </p>
            </div>

            <div 
              className="rounded-xl p-5"
              style={{
                backgroundColor: '#EFF6FF',
                border: '1px solid #BFDBFE'
              }}
            >
              <h4 className="font-bold mb-3 text-[#0044eb]">
                What this means:
              </h4>
              <p className="text-sm mb-3 text-gray-700">
                What cost {formatCurrency(result.originalAmount)} in {startYear} would cost approximately {formatCurrency(result.inflatedAmount)} in {endYear}.
              </p>
              <p className="text-sm text-gray-700">
                To maintain the same purchasing power, you would need {((result.inflatedAmount / result.originalAmount - 1) * 100).toFixed(1)}% more money.
              </p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Value Over Time Chart */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-900">
                Value Over Time
              </h4>
              <div className="h-64 rounded-xl p-4" style={{ backgroundColor: '#F9FAFB' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={result.yearlyValues}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis 
                      dataKey="year" 
                      stroke="#6B7280"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="#6B7280"
                      fontSize={12}
                      tickFormatter={(value) => formatCurrency(value).slice(0, -3) + 'k'}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        color: '#111827',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                      }}
                      formatter={(value) => [formatCurrency(value), 'Value']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Inflation Rate Chart */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-900">
                Inflation Rate Timeline
              </h4>
              <div className="h-64 rounded-xl p-4" style={{ backgroundColor: '#F9FAFB' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={result.inflationRates}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis 
                      dataKey="year" 
                      stroke="#6B7280"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="#6B7280"
                      fontSize={12}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        color: '#111827',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                      }}
                      formatter={(value) => [`${value}%`, 'Inflation Rate']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="rate" 
                      stroke="#EF4444" 
                      strokeWidth={2}
                      dot={{ fill: '#EF4444', strokeWidth: 2, r: 3 }}
                      activeDot={{ r: 5, fill: '#EF4444' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div 
            className="mt-8 p-4 rounded-xl"
            style={{
              backgroundColor: '#FEF3C7',
              border: '1px solid #F59E0B'
            }}
          >
            <p className="text-sm text-amber-800">
              <strong>{t('note').split(':')[0]}:</strong> {t('note').split(':')[1]}
            </p>
          </div>
        </motion.div>
      )}
      </motion.div>
    </div>
  );
};

export default InflationCalculator;