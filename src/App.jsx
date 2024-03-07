import React from 'react';
import Landing from './components/Landing';
import Navbarr from './components/Navbarr';
import Marque from './components/Marque';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LocomotiveScroll from 'locomotive-scroll';
import Travel from './components/Travel';
import Bubble from './components/Bubble';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-white '>

    <Navbarr />
    <Landing />
    <Marque />
    <About />
    <Projects />
    <Bubble />
    <Travel />
    <Contact />
    
    </div>
  )
}

export default App;