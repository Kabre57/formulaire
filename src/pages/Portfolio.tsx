
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioHeader from '@/components/portfolio/PortfolioHeader';
import PortfolioProjects from '@/components/portfolio/PortfolioProjects';
import PortfolioSkills from '@/components/portfolio/PortfolioSkills';
import PortfolioContact from '@/components/portfolio/PortfolioContact';
import ScrollToTop from '@/components/ScrollToTop';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PortfolioHeader />
      <PortfolioProjects />
      <PortfolioSkills />
      <PortfolioContact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
