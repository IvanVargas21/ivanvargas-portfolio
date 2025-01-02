import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechStackSection from './components/TechStackSection';
import StickyLabel from './components/StickyLabel';
import AboutSection from './components/AboutSection';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <StickyLabel/>
      <div className="bg-slate-900">
          <Navbar/>
          <div className="max-w-7xl mx-auto px-8">
            <HeroSection />
            <AboutSection/>
            <TechStackSection/>
            
          </div>
      </div>
    </div>

    
  )
}

export default App
