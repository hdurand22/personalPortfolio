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
        <ParallaxLayer offset={0}>
          <Home />
        </ParallaxLayer>
        <About />
        <Portfolio />
        <Contact />
        <Breadcrumbs />
      </Parallax>
    </div>
  );
}

export default App;
