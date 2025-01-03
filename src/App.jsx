import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechStackSection from './components/TechStackSection';
import StickyLabel from './components/StickyLabel';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <StickyLabel/>
      <div className="bg-slate-900 min-h-screen">
          <Navbar/>
          <div className="max-w-7xl mx-auto px-8">
            <HeroSection />
            <AboutSection/>
            <TechStackSection/>
            <ProjectsSection/>
          </div>
      </div>
    </div>

    
  )
}

export default App
