import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesignSystem from './pages/DesignSystem';
import Home from './pages/Home';
import { MatrixBackground } from './components/background/MatrixBackground';
import { ParallaxCode } from './components/background/ParallaxCode';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ui/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <MatrixBackground />
          <ParallaxCode />
        </div>
        <div className="relative z-10 min-h-screen bg-transparent">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design-system" element={<DesignSystem />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
