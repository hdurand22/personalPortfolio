import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
// import DropdownMenu from './components/DropdownMenu';
import List from './components/List';
import Heading from './components/Heading';


function App() {
  const parallax = useRef();

  return (
    <div className='main-page'>
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer offset={0}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <Portfolio />
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
