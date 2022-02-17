import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
// import DropdownMenu from './components/DropdownMenu';
import List from './components/List';
import Heading from './components/Heading';


function App() {
  
  return (
    <Parallax pages={5} style={{ top: '0', left: '0'}}>
      <ParallaxLayer 
        offset={0}
        speed={2.5}
      >
        <Home>
          <Heading />
        </Home>
      </ParallaxLayer>
      {/* <ParallaxLayer
        offset={1}
        speed={2}
        style={{ backgroundColor: '#2e2d2d'}} /> */}
      <ParallaxLayer
        offset={1}
        speed={0.5}
      >
        <About />   
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.5}
      >
        <Portfolio />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={2.5}
      >
        <Contact />
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
