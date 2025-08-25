# Inflate - Track, Understand, and Outsmart Inflation

A modern, interactive web platform for tracking annual inflation movements across different countries with investment recommendations to hedge against inflation.

## Features

### 🌍 Multi-Country Support
- Select from multiple countries (Indonesia, United States, United Kingdom, Japan, Germany)
- Default country: Indonesia
- Automatic currency updates based on selected country

### 📊 Interactive Data Visualization
- Line and bar chart options
- Hover tooltips with detailed values
- Responsive charts that adapt to different screen sizes
- Year selection via dropdown and slider

### 💱 Currency Conversion
- Support for multiple currencies (IDR, USD, GBP, JPY, EUR)
- Automatic currency selection based on country
- Manual currency override option

### 📈 Comprehensive Analytics
- Current inflation rate display
- Historical averages, highs, and lows
- Year-over-year comparison
- Impact level assessment (Low/Moderate/High)

### 🛡️ Investment Recommendations
- Six categories of inflation hedge assets:
  - Dividend Stocks
  - Real Estate
  - Commodities (Gold, Silver, Oil)
  - TIPS Bonds
  - Cryptocurrency
  - Inflation-Protected Mutual Funds
- Interactive cards with pros/cons analysis
- Risk level indicators
- Expandable details for each asset class

### 🎨 Modern UI/UX Design
- TradingView-inspired dark theme
- Primary color: Blue (#2962FF)
- Dark backgrounds (#121212 / #1E1E1E)
- Green (#26A69A) for positive values
- Red (#EF5350) for negative values
- Clean, minimalistic, data-focused layout
- Inter and DM Sans typography

### ⚡ Smooth Animations
- Framer Motion integration
- Smooth transitions and hover effects
- Staggered animations for better UX
- Responsive design for desktop and mobile

## Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd inflate
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Main navigation header
│   ├── CountrySelector.jsx     # Country selection dropdown
│   ├── YearSelector.jsx        # Year selection with slider
│   ├── CurrencySelector.jsx    # Currency selection dropdown
│   ├── InflationChart.jsx      # Interactive charts (line/bar)
│   ├── InflationStats.jsx      # Statistics cards
│   └── HedgeRecommendations.jsx # Investment recommendations
├── data/
│   ├── inflationData.js        # Mock inflation data
│   └── hedgeAssets.js          # Investment asset information
├── App.jsx                     # Main application component
├── index.js                    # Application entry point
└── index.css                   # Global styles and Tailwind imports
```

## Data Structure

### Inflation Data
The application uses mock data structured by country, containing:
- Historical inflation rates by year
- Default currency information
- Currency symbols

### Hedge Assets
Investment recommendations include:
- Asset category information
- Risk levels
- Pros and cons
- Example investments
- Interactive icons

## Customization

### Adding New Countries
1. Update `src/data/inflationData.js`
2. Add country data with currency and historical rates
3. Update currency rates if needed

### Adding New Asset Categories
1. Update `src/data/hedgeAssets.js`
2. Include icon, description, pros/cons, and risk level
3. Add appropriate Lucide React icon

### Styling Modifications
- Colors can be modified in `tailwind.config.js`
- Component-specific styles in respective component files
- Global styles in `src/index.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Design inspiration from TradingView
- Icons by Lucide React
- Charts powered by Recharts
- Animations by Framer Motion