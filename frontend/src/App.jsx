import './App.css';
import { Container } from 'react-bootstrap';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';


function App() {
  return (
<BrowserRouter>
  <NavHeader />
    <main className='py-4' >
    <Container>
      <Routes>
        <Route path='/' exact element={<Home />}  />
        <Route path='/login' element={<LoginPage />}  />
        <Route path='/register' element={<RegisterPage />}  />
        <Route path='/products' element={<AllProducts />}  />
        <Route path='/product/:id' element={<ProductPage />}  />
        <Route path='/cart/:id' element={<CartPage />}  />
        <Route path='/cart' element={<CartPage />}  />
      </Routes>
    </Container>
    </main>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
