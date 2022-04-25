import './App.css';
import { Container } from 'react-bootstrap';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';



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
        <Route path='/products' exact element={<AllProducts />}  />
        <Route path='/product/:id' exact element={<ProductPage />}  />
      </Routes>
    </Container>
    </main>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
