import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

const SimpleInflationCalculator = ({ countryData, selectedCountry }) => {
  const [amount, setAmount] = useState('100000');
  const [startYear, setStartYear] = useState(2000);
  const [endYear, setEndYear] = useState(2025);
  const [result, setResult] = useState(null);

  const availableYears = countryData.data.map(item => item.year).sort();
  const minYear = Math.min(...availableYears);
  const maxYear = Math.max(...availableYears);

  const calculateInflation = () => {
    if (!amount || startYear >= endYear) return;

    const startAmount = parseFloat(amount);
    let currentValue = startAmount;
    const yearlyValues = [{ year: startYear, value: startAmount }];

    // Calculate compound inflation from start year to end year
    for (let year = startYear + 1; year <= endYear; year++) {
      const yearData = countryData.data.find(item => item.year === year);
      if (yearData) {
        const inflationRate = yearData.rate / 100;
        currentValue = currentValue * (1 + inflationRate);
        yearlyValues.push({ year, value: currentValue });
      }
    }

    const totalInflation = ((currentValue - startAmount) / startAmount) * 100;
    const averageInflation = totalInflation / (endYear - startYear);

    // Get CPI data for display
    const startCPI = 100; // Base CPI
    const endCPI = startCPI * (currentValue / startAmount);

    setResult({
      originalAmount: startAmount,
      inflatedAmount: currentValue,
      totalInflation: totalInflation,
      averageInflation: averageInflation,
      yearRange: endYear - startYear,
      startCPI: startCPI,
      endCPI: endCPI,
      yearlyValues: yearlyValues
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

  const formatNumber = (value) => {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-2">Inflation Calculator</h1>
          <p className="text-blue-100">
            This tool displays the time value of money based on historical inflation and CPI data.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Country and Period Selection */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Country Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <div className="relative">
                <select
                  value={selectedCountry}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:border-primary focus:outline-none appearance-none cursor-pointer"
                >
                  <option value={selectedCountry}>
                    {countryData.flag} {selectedCountry}
                  </option>
                </select>
              </div>
            </div>

            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:border-primary focus:outline-none"
                placeholder="100000"
              />
            </div>

            {/* Start Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start year
              </label>
              <select
                value={startYear}
                onChange={(e) => setStartYear(parseInt(e.target.value))}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:border-primary focus:outline-none appearance-none cursor-pointer"
              >
                {availableYears.filter(year => year < maxYear).map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* End Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End year
              </label>
              <select
                value={endYear}
                onChange={(e) => setEndYear(parseInt(e.target.value))}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:border-primary focus:outline-none appearance-none cursor-pointer"
              >
                {availableYears.filter(year => year > startYear).map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={calculateInflation}
              disabled={!amount || startYear >= endYear}
              className="bg-success hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <span>Calculate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Result */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Value of {startYear} {selectedCountry} {countryData.currencySymbol.replace(/[^A-Za-z]/g, '')} today
              </h2>
              
              <div className="flex items-center justify-center space-x-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {formatCurrency(result.originalAmount)}
                  </div>
                  <div className="text-gray-500">in {startYear}</div>
                </div>
                
                <ArrowRight className="w-8 h-8 text-gray-400" />
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {formatCurrency(result.inflatedAmount)}
                  </div>
                  <div className="text-gray-500">in {endYear}</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  The inflation rate in {selectedCountry} between {startYear} and today has been{' '}
                  <strong>{result.totalInflation.toFixed(2)}%</strong>, which translates into a total increase of{' '}
                  <strong>{formatCurrency(result.inflatedAmount - result.originalAmount)}</strong>. This means that{' '}
                  <strong>{formatCurrency(result.originalAmount)} in {startYear} are equivalent to {formatCurrency(result.inflatedAmount)} in {endYear}</strong>.
                  In other words, the purchasing power of {formatCurrency(result.originalAmount)} in {startYear} equals{' '}
                  {formatCurrency(result.inflatedAmount)} today. The average annual inflation rate between these periods has been{' '}
                  <strong>{result.averageInflation.toFixed(2)}%</strong>.
                </p>
              </div>
            </div>

            {/* Statistics and Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Chart */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Inflation timeline in {selectedCountry} ({startYear} - {endYear})
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  The following chart depicts the equivalence of {formatCurrency(result.originalAmount)} due to compound inflation and CPI changes. All values are equivalent in terms of purchasing power, which means that for each year the same goods or services could be bought with the indicated amount of money.
                </p>
                
                <div className="h-80 bg-gray-50 rounded-lg p-4">
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
                        tickFormatter={(value) => formatCurrency(value).replace(/\D/g, '') + 'k'}
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

              {/* Statistics */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Value of {countryData.currencySymbol.replace(/[^A-Za-z]/g, '')} over time (by year)
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Cumulative inflation</div>
                    <div className="text-2xl font-bold text-gray-900">{result.totalInflation.toFixed(2)}%</div>
                    <div className="text-xs text-gray-500">From {startYear}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Avg. annual inflation</div>
                    <div className="text-2xl font-bold text-gray-900">{result.averageInflation.toFixed(2)}%</div>
                    <div className="text-xs text-gray-500">From {startYear}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">CPI {startYear}</div>
                    <div className="text-2xl font-bold text-gray-900">{formatNumber(result.startCPI)}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">CPI today</div>
                    <div className="text-2xl font-bold text-gray-900">{formatNumber(result.endCPI)}</div>
                  </div>
                </div>

                {/* Yearly breakdown table */}
                <div className="mt-6">
                  <div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="font-semibold text-gray-700">Period</div>
                      <div className="font-semibold text-gray-700">Value</div>
                      {result.yearlyValues.slice(0, 10).map((item, index) => (
                        <React.Fragment key={item.year}>
                          <div className="text-gray-600">{item.year}</div>
                          <div className="text-gray-900 font-medium">
                            {formatCurrency(item.value).replace(/\D/g, '')}.{formatCurrency(item.value).slice(-3)}
                          </div>
                        </React.Fragment>
                      ))}
                      {result.yearlyValues.length > 10 && (
                        <>
                          <div className="text-gray-400">...</div>
                          <div className="text-gray-400">...</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SimpleInflationCalculator;