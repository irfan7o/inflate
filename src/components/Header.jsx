import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search } from 'lucide-react';

const Header = () => {

  return (
    <motion.header 
      className="sticky top-0 z-50 px-6 py-4 transition-colors duration-200"
      style={{ 
        backgroundColor: '#FFFFFF'
      }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Inflate
            </h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <div className="flex items-center rounded-full px-4 py-2 min-w-[280px]" style={{ backgroundColor: '#F9FAFB' }}>
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search indexes"
                className="bg-transparent flex-1 text-gray-600 placeholder-gray-400 focus:outline-none text-sm"
              />
              <div className="ml-3 bg-gray-300 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                /
              </div>
            </div>
          </div>
          
          {/* Sign In Link */}
          <button
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            Sign In
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;