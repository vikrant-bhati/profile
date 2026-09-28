import { useEffect, useRef } from 'react';
import PortfolioLayout from './PortfolioLayout.jsx';
import { createPortfolioAnalytics } from './analytics.js';
import { initializeAnalyticsPreferences } from './analytics-preferences.js';
import portfolioData from './portfolio-data.js';
import { initializePortfolio } from './portfolio-interactions.js';

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const analytics = createPortfolioAnalytics({
      measurementId: 'G-4WETK13KMP', window, document,
    });
    const cleanupAnalytics = initializeAnalyticsPreferences(containerRef.current, analytics);
    const cleanupPortfolio = initializePortfolio(containerRef.current, portfolioData, analytics);
    return () => {
      cleanupPortfolio();
      cleanupAnalytics();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <PortfolioLayout />
    </div>
  );
}
