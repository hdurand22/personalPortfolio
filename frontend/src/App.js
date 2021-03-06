import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import DropdownMenu from './components/DropdownMenu';


function App() {
  return (
    <Router>
      <Container id='app-container'>
        <Routes>
            <Route path='/' exact element=
            {
                <Home>
                  <DropdownMenu />
                </Home>
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
