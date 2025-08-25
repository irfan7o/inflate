import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';

const YearSelector = ({ years, selectedYear, onYearChange }) => {
  return (
    <motion.div 
      className="card"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="flex items-center space-x-3 mb-4">
        <Calendar className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-white">Select Year</h3>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(parseInt(e.target.value))}
            className="w-full bg-dark-200 border border-gray-600 rounded-lg px-4 py-3 text-text-primary focus:border-primary focus:outline-none appearance-none cursor-pointer"
          >
            {years.map((year) => (
              <option key={year} value={year} className="bg-dark-200">
                {year}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm text-text-secondary">Year Range</label>
          <input
            type="range"
            min={Math.min(...years)}
            max={Math.max(...years)}
            value={selectedYear}
            onChange={(e) => onYearChange(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #2962FF 0%, #2962FF ${((selectedYear - Math.min(...years)) / (Math.max(...years) - Math.min(...years))) * 100}%, #374151 ${((selectedYear - Math.min(...years)) / (Math.max(...years) - Math.min(...years))) * 100}%, #374151 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-text-secondary">
            <span>{Math.min(...years)}</span>
            <span>{Math.max(...years)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default YearSelector;