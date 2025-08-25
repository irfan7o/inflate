import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const InflationStats = ({ data, selectedYear, currencySymbol }) => {
  const currentYearData = data.find(item => item.year === selectedYear);
  const previousYearData = data.find(item => item.year === selectedYear - 1);
  
  const currentRate = currentYearData?.rate || 0;
  const previousRate = previousYearData?.rate || 0;
  const change = currentRate - previousRate;
  
  const averageRate = data.reduce((sum, item) => sum + item.rate, 0) / data.length;
  const maxRate = Math.max(...data.map(item => item.rate));
  const minRate = Math.min(...data.map(item => item.rate));

  const stats = [
    {
      title: 'Current Rate',
      value: `${currentRate.toFixed(2)}%`,
      change: change,
      icon: currentRate >= 0 ? TrendingUp : TrendingDown,
      color: currentRate >= 0 ? 'text-success' : 'text-danger'
    },
    {
      title: 'Average Rate',
      value: `${averageRate.toFixed(2)}%`,
      icon: Activity,
      color: 'text-primary'
    },
    {
      title: 'Highest Rate',
      value: `${maxRate.toFixed(2)}%`,
      icon: TrendingUp,
      color: 'text-danger'
    },
    {
      title: 'Lowest Rate',
      value: `${minRate.toFixed(2)}%`,
      icon: TrendingDown,
      color: 'text-success'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          className="card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text-secondary text-sm mb-1">{stat.title}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              {stat.change !== undefined && (
                <p className={`text-sm mt-1 ${change >= 0 ? 'text-success' : 'text-danger'}`}>
                  {change >= 0 ? '+' : ''}{change.toFixed(2)}% from previous year
                </p>
              )}
            </div>
            <stat.icon className={`w-8 h-8 ${stat.color}`} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default InflationStats;