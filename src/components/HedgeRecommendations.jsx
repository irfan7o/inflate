import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronDown, ChevronUp, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const RiskBadge = ({ level }) => {
  const { colors: themeColors } = useTheme();
  
  const riskColors = {
    'Low': { bg: '#10B98120', text: '#10B981', border: '#10B98150' },
    'Medium': { bg: '#F59E0B20', text: '#F59E0B', border: '#F59E0B50' },
    'Medium-High': { bg: '#F9731620', text: '#F97316', border: '#F9731650' },
    'High': { bg: '#EF444420', text: '#EF4444', border: '#EF444450' }
  };

  const colorSet = riskColors[level];

  return (
    <span 
      className="px-2 py-1 rounded-full text-xs border"
      style={{
        backgroundColor: colorSet.bg,
        color: colorSet.text,
        borderColor: colorSet.border
      }}
    >
      {level} Risk
    </span>
  );
};

const AssetCard = ({ asset, index }) => {
  const Icon = asset.icon;

  return (
    <motion.div
      className="rounded-2xl p-6 cursor-pointer transition-all duration-200 hover:bg-gray-100"
      style={{
        backgroundColor: '#F9FAFB'
      }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div 
            className="p-3 rounded-xl"
            style={{ backgroundColor: '#EFF6FF' }}
          >
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <RiskBadge level={asset.riskLevel} />
        </div>
        
        <div className="flex-1">
          <h4 className="text-lg font-bold mb-2 text-gray-900">
            {asset.title}
          </h4>
          <p className="text-sm text-gray-600">
            {asset.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const HedgeRecommendations = ({ hedgeAssets, inflationRate }) => {
  return (
    <motion.div
      className="w-full py-12"
      style={{
        backgroundColor: '#FFFFFF',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)'
      }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Inflation Hedge Recommendations
          </h2>
        </div>

        <p className="mb-8 text-gray-600 text-sm">
          Protect your purchasing power with these investment options designed to hedge against inflation.
        </p>
        
        <div className="border rounded-xl p-4 mb-8" style={{
          backgroundColor: '#EFF6FF',
          borderColor: '#BFDBFE'
        }}>
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm text-gray-900">
                <strong>Current inflation rate: {inflationRate}%</strong>
              </p>
              <p className="text-sm mt-1 text-gray-600">
                Consider these assets to protect your purchasing power against inflation. 
                Remember to diversify and consult with a financial advisor.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hedgeAssets.map((asset, index) => (
            <AssetCard key={asset.id} asset={asset} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HedgeRecommendations;