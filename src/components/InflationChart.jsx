import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { BarChart3, TrendingUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const CustomTooltip = ({ active, payload, label, colors }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div 
        className="border rounded-lg p-3 shadow-lg"
        style={{
          backgroundColor: colors.card,
          borderColor: colors.border
        }}
      >
        <p className="font-medium" style={{ color: colors.text.primary }}>
          {`Year: ${label}`}
        </p>
        <p className={`font-semibold ${value >= 0 ? 'text-success' : 'text-danger'}`}>
          {`Inflation Rate: ${value}%`}
        </p>
      </div>
    );
  }
  return null;
};

const InflationChart = ({ data, selectedYear, chartType, onChartTypeChange }) => {
  const { colors } = useTheme();
  
  const chartData = data.map(item => ({
    ...item,
    isSelected: item.year === selectedYear
  }));

  return (
    <motion.div 
      className="rounded-lg border p-6 hover:border-primary transition-colors duration-200"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border
      }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold" style={{ color: colors.text.primary }}>
            Inflation Trends
          </h3>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onChartTypeChange('line')}
            className={`p-2 rounded-lg transition-colors ${
              chartType === 'line' ? 'bg-primary text-white' : 'hover:opacity-80'
            }`}
            style={chartType !== 'line' ? {
              backgroundColor: colors.surface,
              color: colors.text.secondary
            } : {}}
          >
            <TrendingUp className="w-4 h-4" />
          </button>
          <button
            onClick={() => onChartTypeChange('bar')}
            className={`p-2 rounded-lg transition-colors ${
              chartType === 'bar' ? 'bg-primary text-white' : 'hover:opacity-80'
            }`}
            style={chartType !== 'bar' ? {
              backgroundColor: colors.surface,
              color: colors.text.secondary
            } : {}}
          >
            <BarChart3 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'line' ? (
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
              <XAxis 
                dataKey="year" 
                stroke={colors.text.secondary}
                fontSize={12}
              />
              <YAxis 
                stroke={colors.text.secondary}
                fontSize={12}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={(props) => <CustomTooltip {...props} colors={colors} />} />
              <Line 
                type="monotone" 
                dataKey="rate" 
                stroke="#2962FF" 
                strokeWidth={3}
                dot={{ fill: '#2962FF', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#2962FF' }}
              />
            </LineChart>
          ) : (
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
              <XAxis 
                dataKey="year" 
                stroke={colors.text.secondary}
                fontSize={12}
              />
              <YAxis 
                stroke={colors.text.secondary}
                fontSize={12}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={(props) => <CustomTooltip {...props} colors={colors} />} />
              <Bar 
                dataKey="rate" 
                fill="#2962FF"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default InflationChart;