import { useEffect, useRef } from 'react';
import PortfolioLayout from './PortfolioLayout.jsx';
import portfolioData from './portfolio-data.js';
import { initializePortfolio } from './portfolio-interactions.js';

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => initializePortfolio(containerRef.current, portfolioData), []);

  return (
    <div ref={containerRef}>
      <PortfolioLayout />
    </div>
  );
}
