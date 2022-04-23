import './App.css';
import { Container } from 'react-bootstrap';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
<BrowserRouter>
  <NavHeader />
    <main className='py-4' >
    <Container>
        <div className="header">
          <h1 className="heading">SneakerSource | Welcome</h1>
        </div>
      <Routes>
        <Route path='/' exact element={<Home />}  />
      </Routes>
    </Container>
    </main>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
