import React, { useEffect, useState } from 'react';
import ParticleBackground from './components/layout/ParticleBackground';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import AchievementsSection from './components/sections/AchievementsSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth animation
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-primary-950 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-5xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-950 bg-clip-text text-transparent animate-pulse">
            AAK
          </div>
          <div className="mt-4 relative w-64 h-1.5 bg-slate-200 dark:bg-primary-800 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-primary-600 to-accent-950 rounded-full animate-[loading_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-primary-950 text-slate-800 dark:text-slate-200 font-sans">
        <ParticleBackground />
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <AchievementsSection />
          <EducationSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;