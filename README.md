# Trivia Quiz Visualizer

A modern, interactive data visualization tool for trivia questions from the Open Trivia Database API. 
Built with React and featuring a retro-gaming aesthetic.


##  Features

- **Real-time Data Fetching**: Loads 50 random trivia questions from Open Trivia DB API
- **Interactive Visualizations**:
    - Pie chart showing question distribution by category
    - Bar chart displaying difficulty levels (Easy, Medium, Hard)
- **Smart Filtering**: Filter questions by category with real-time count updates
- **Retro UI Design**: Pixel-art styled interface using NES.css framework
- **Responsive Design**: Works seamlessly across different screen sizes
- **Data Reload**: Refresh button to fetch new questions (with rate-limit handling)

##  Technologies Used

### Core
- **React 19.2.0** - Modern UI library with functional components and hooks
- **Vite 7.1.12** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features

### Visualization
- **Recharts 3.3.0** - Composable charting library built on React components
    - PieChart for category distribution
    - BarChart for difficulty visualization
    - ResponsiveContainer for adaptive layouts

### Styling
- **NES.css 2.2.1** - NES-style CSS framework for retro gaming look

### State Management & Data
- **React Hooks** (`useState`, `useEffect`, `useRef`) - Modern state management
- **Custom Hooks** - `useTrivia` for data fetching logic
- **HTML Entity Decoding** - Proper text rendering from API

##  Project Structure

```
trivia-visualizer/
├── src/
│   ├── components/
│   │   ├── CategoryChart.jsx      # Pie chart for categories
│   │   ├── CategoryFilter.jsx     # Category dropdown selector
│   │   ├── DifficultyChart.jsx    # Bar chart for difficulty
│   │   ├── DifficultyContainer.jsx # Wrapper for difficulty chart
│   │   ├── ReloadButton.jsx       # Data refresh button
│   │   ├── ShowHideButton.jsx     # Toggle category chart
│   │   ├── Stats.jsx              # Statistics display
│   │   └── TryAgainButton.jsx     # Error retry button
│   ├── hooks/
│   │   └── useTrivia.js           # Custom hook for API data
│   ├── utils/
│   │   ├── dataAnalysis.js        # Data processing functions
│   │   └── htmlUtils.js           # HTML entity decoder
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # Application styles
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── package.json                   # Project dependencies
└── vite.config.js                 # Vite configuration
```

##  Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/xxzme/trivia-visualizer.git
   cd trivia-visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

##  How It Works

### Data Flow

1. **Initial Load**: On mount, `useTrivia` hook fetches 50 questions from the API
2. **Data Processing**: HTML entities are decoded for proper display
3. **State Management**: Questions are stored in React state
4. **Analysis**: Data is processed to generate category and difficulty statistics
5. **Visualization**: Recharts renders interactive charts based on processed data
6. **Filtering**: Users can filter by category

### API Integration

- **Endpoint**: `https://opentdb.com/api.php?amount=50`
- **Rate Limiting**: 5-second delay between reload requests
- **Error Handling**: User-friendly error messages with retry option
- **Loading States**: Visual feedback during data fetching

### Key Components

- **useTrivia Hook**: Manages API calls, loading states, and error handling
- **CategoryFilter**: Dropdown for filtering questions by category
- **CategoryChart**: Pie chart visualization using Recharts PieChart
- **DifficultyChart**: Bar chart showing question difficulty distribution
- **Stats**: Displays total questions and category count

##  Design Decisions

### Why NES.css?
- Creates unique user experience
- Fits the "trivia game" theme perfectly

### Why Recharts?
- Declarative, React-friendly API
- Responsive by default
- Easy to customize and extend

### Component Architecture
- **Separation of Concerns**: Each component has a single responsibility
- **Reusability**: Button components are generic and reusable
- **Custom Hooks**: Data fetching logic separated into `useTrivia`
- **Utility Functions**: Data analysis and HTML decoding in separate modules

##  Technical Highlights

### React Patterns Used
- **Functional Components**: All components use modern function syntax
- **Hooks**: `useState`, `useEffect`, `useRef` for state and lifecycle
- **Custom Hooks**: `useTrivia` encapsulates data fetching logic
- **Props Drilling**: Clean prop passing for component communication

### Performance Optimizations
- **Ref for Fetch Guard**: Prevents duplicate API calls
- **Timeout Cleanup**: Proper cleanup in useEffect
- **Conditional Rendering**: Only render charts when data is available

### Code Quality
- **Component Organization**: Logical file structure
- **Utility Separation**: Pure functions in utils folder
- **Error Boundaries**: Comprehensive error handling

##  Future Enhancements

Potential improvements for scaling this project:

1. **State Management**: Implement Redux Toolkit or Context API for larger datasets
2. **Data Persistence**: Add localStorage to cache questions
3. **Advanced Filtering**: Multi-select categories, difficulty range
4. **Search Functionality**: Search questions by keyword
5. **Export Features**: Download data as CSV/JSON
6. **User Preferences**: Theme customization, chart type selection
7. **Testing**: Unit tests with Vitest, integration tests with Testing Library
8. **TypeScript**: Add type safety for better development experience

##  Known Limitations

- **API Rate Limit**: Open Trivia DB has rate limiting (5 second delay implemented)
- **Data Size**: Limited to 50 questions per fetch
- **Browser Compatibility**: Requires modern browsers with ES6+ support

##  API Attribution

This project uses the [Open Trivia Database API](https://opentdb.com/) for trivia questions.

##  Contributing

Suggestions and improvements are welcome! This is a learning project demonstrating:
- React fundamentals and hooks
- Data visualization with Recharts
- API integration and error handling
- Modern UI/UX design

##  License

This project is open source and available for educational purposes.

---


*This project demonstrates proficiency in React, data visualization, API integration, and modern web development practices.*