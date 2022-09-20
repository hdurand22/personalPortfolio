import React, { useRef, createContext, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax } from '@react-spring/parallax';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import { useMediaQuery } from 'react-responsive';

// Provide app-wide access to screen size
export const ScreenSizeContext = createContext();

function App() {
  const parallax = useRef();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1280 });
  
  const value = useMemo(() => ({
    isTabletOrMobile
  }), [isTabletOrMobile]);


  return (
    <ScreenSizeContext.Provider value={value}>
          <Parallax ref={parallax} pages={4}>
            <Home parallax={parallax}/>
            <About parallax={parallax} />
            <Portfolio parallax={parallax}/>
            <Contact parallax={parallax} />
          </Parallax>
    </ScreenSizeContext.Provider>
  );
}

export default App;
