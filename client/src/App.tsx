import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesignSystem from './pages/DesignSystem';
import Home from './pages/Home';
import { MatrixBackground } from './components/background/MatrixBackground';
import { ParallaxCode } from './components/background/ParallaxCode';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { LanguageToggle } from './components/ui/LanguageToggle';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="fixed inset-0 z-0 pointer-events-none">
            <MatrixBackground />
            <ParallaxCode />
          </div>
          <div className="relative z-10 min-h-screen bg-transparent">
            {/* Floating Controls Stack */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/design-system" element={<DesignSystem />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
