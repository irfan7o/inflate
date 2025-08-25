import { TrendingUp, Building, Coins, Landmark, Bitcoin, PiggyBank } from 'lucide-react';

export const hedgeAssets = [
  {
    id: 'stocks',
    title: 'Dividend Stocks',
    icon: TrendingUp,
    description: 'Companies with strong pricing power and dividend growth',
    pros: ['Regular income', 'Capital appreciation', 'Inflation-adjusted dividends'],
    cons: ['Market volatility', 'Company-specific risks', 'Tax implications'],
    riskLevel: 'Medium',
    examples: ['Consumer staples', 'Utilities', 'REITs']
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    icon: Building,
    description: 'Physical properties and real estate investment trusts',
    pros: ['Tangible asset', 'Rental income growth', 'Tax benefits'],
    cons: ['High capital requirement', 'Illiquid', 'Maintenance costs'],
    riskLevel: 'Medium',
    examples: ['Residential properties', 'Commercial REITs', 'Land']
  },
  {
    id: 'commodities',
    title: 'Commodities',
    icon: Coins,
    description: 'Gold, silver, oil, and other precious metals',
    pros: ['Inflation hedge', 'Portfolio diversification', 'Store of value'],
    cons: ['No income generation', 'Storage costs', 'Price volatility'],
    riskLevel: 'Medium-High',
    examples: ['Gold ETFs', 'Silver', 'Oil futures']
  },
  {
    id: 'tips',
    title: 'TIPS Bonds',
    icon: Landmark,
    description: 'Treasury Inflation-Protected Securities',
    pros: ['Government backing', 'Inflation adjustment', 'Predictable returns'],
    cons: ['Lower yields', 'Interest rate risk', 'Tax on adjustments'],
    riskLevel: 'Low',
    examples: ['I Bonds', 'TIPS ETFs', 'Inflation-linked bonds']
  },
  {
    id: 'crypto',
    title: 'Cryptocurrency',
    icon: Bitcoin,
    description: 'Digital assets with limited supply like Bitcoin',
    pros: ['Decentralized', 'Limited supply', 'High growth potential'],
    cons: ['Extreme volatility', 'Regulatory risks', 'Technology risks'],
    riskLevel: 'High',
    examples: ['Bitcoin', 'Ethereum', 'Crypto ETFs']
  },
  {
    id: 'mutualfunds',
    title: 'Inflation-Protected Funds',
    icon: PiggyBank,
    description: 'Mutual funds focused on inflation-resistant assets',
    pros: ['Professional management', 'Diversification', 'Easy access'],
    cons: ['Management fees', 'Market risk', 'No guarantees'],
    riskLevel: 'Medium',
    examples: ['Commodity funds', 'Infrastructure funds', 'Multi-asset funds']
  }
];