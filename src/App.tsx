import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* Placeholder routes for other pages */}
          <Route path="team" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Team Page - Coming Soon</h1></div>} />
          <Route path="industries" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Industries Page - Coming Soon</h1></div>} />
          <Route path="careers" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Careers Page - Coming Soon</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
