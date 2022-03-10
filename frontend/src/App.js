import { useRef, createContext, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
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
      <div className='main-page'>
        <Parallax ref={parallax} pages={4}>
          <ParallaxLayer offset={0} speed={0.5}>
            <Home parallax={parallax}/>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.8}>
            <About parallax={parallax} />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.8}>
            <Portfolio parallax={parallax}/>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.8}>
            <Contact parallax={parallax} />
          </ParallaxLayer>
        </Parallax>
      </div>
    </ScreenSizeContext.Provider>
  );
}

export default App;
