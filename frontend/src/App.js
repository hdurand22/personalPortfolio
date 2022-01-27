import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Zoom from 'react-reveal';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import Portfolio from './views/Portfolio';


function App() {
  return (
    <Router>
      <Container>
        <Routes>
            <Route path='/' exact element={
              <Zoom>
                <Home />
              </Zoom>
            } />
          <Route path='/about' exact element={<About />} />
          <Route path='/portfolio' exact element={<Portfolio />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
