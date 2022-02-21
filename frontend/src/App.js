import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Breadcrumbs from './components/Breadcrumbs';


function App() {
  const parallax = useRef();

  return (
    <div className='main-page'>
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer offset={0} speed={0.5}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer sticky={{start: 1, end: 1.9}} speed={0.8}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer sticky={{start: 2, end: 2.9}}>
          <Portfolio />
        </ParallaxLayer>
        <ParallaxLayer sticky={{start: 3, end: 3.9}}>
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} sticky={{start: 1.05, end: 3.2}} id='nav-parallax-layer'>
          <Breadcrumbs />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
