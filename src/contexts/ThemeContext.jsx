import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update document class for global styling
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark ? {
      // Dark theme colors
      background: '#121212',
      surface: '#1E1E1E',
      primary: '#2962FF',
      text: {
        primary: '#E0E0E0',
        secondary: '#B0B0B0',
      },
      success: '#26A69A',
      danger: '#EF5350',
      border: '#374151',
      card: '#1E1E1E',
    } : {
      // Light theme colors
      background: '#FFFFFF',
      surface: '#F8F9FA',
      primary: '#2962FF',
      text: {
        primary: '#1F2937',
        secondary: '#6B7280',
      },
      success: '#10B981',
      danger: '#EF4444',
      border: '#E5E7EB',
      card: '#FFFFFF',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};