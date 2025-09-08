import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  EN: {
    // Header
    calculator: 'Calculator',
    inflationRates: 'Inflation Rates',
    investment: 'Investment',
    askAI: 'Ask AI',
    pricing: 'Pricing',
    
    // Main Content
    inflationCalculatorTitle: 'Inflation Calculator',
    inflationCalculatorDescription: 'Calculate how inflation affects the purchasing power of your money over time.',
    
    // Calculator Form
    amount: 'Amount',
    startYear: 'Start Year',
    endYear: 'End Year',
    calculate: 'Calculate',
    
    // Results
    originalValue: 'Original Value',
    equivalentValue: 'Equivalent Value',
    inflationRate: 'Total Inflation',
    purchasingPowerLoss: 'Purchasing Power Loss',
    note: 'Note: This calculation is based on historical inflation data. Actual inflation may vary and this tool is for educational purposes only.',
    
    // Footer
    home: 'Home',
    feature: 'Feature',
    useCase: 'Use Case',
    solutions: 'Solutions',
    pricing: 'Pricing',
    testimonials: 'Testimonials',
    faqs: 'FAQs',
    allRightsReserved: 'All rights reserved.',
    designedDevelopedBy: 'Designed & Developed by',
    styleGuide: 'Style Guide',
    licenses: 'Licenses',
    changelog: 'Changelog'
  },
  ID: {
    // Header
    calculator: 'Kalkulator',
    inflationRates: 'Tingkat Inflasi',
    investment: 'Investasi',
    askAI: 'Tanya AI',
    pricing: 'Harga',
    
    // Main Content
    inflationCalculatorTitle: 'Kalkulator Inflasi',
    inflationCalculatorDescription: 'Hitung bagaimana inflasi mempengaruhi daya beli uang Anda dari waktu ke waktu.',
    
    // Calculator Form
    amount: 'Jumlah',
    startYear: 'Tahun Mulai',
    endYear: 'Tahun Akhir',
    calculate: 'Hitung',
    
    // Results
    originalValue: 'Nilai Asli',
    equivalentValue: 'Nilai Setara',
    inflationRate: 'Total Inflasi',
    purchasingPowerLoss: 'Kehilangan Daya Beli',
    note: 'Catatan: Perhitungan ini berdasarkan data inflasi historis. Inflasi aktual dapat bervariasi dan alat ini hanya untuk tujuan edukasi.',
    
    // Footer
    home: 'Beranda',
    feature: 'Fitur',
    useCase: 'Kasus Penggunaan',
    solutions: 'Solusi',
    pricing: 'Harga',
    testimonials: 'Testimoni',
    faqs: 'FAQ',
    allRightsReserved: 'Semua hak dilindungi.',
    designedDevelopedBy: 'Dirancang & Dikembangkan oleh',
    styleGuide: 'Panduan Gaya',
    licenses: 'Lisensi',
    changelog: 'Catatan Perubahan'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode);
  };

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      t,
      translations
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
