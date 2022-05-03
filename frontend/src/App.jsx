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
import { ProfilePage } from './pages/ProfilePage';
import { ShippingPage } from './pages/ShippingPage';
import { PaymentPage } from './pages/PaymentPage';
import { OrderPage } from './pages/OrderPage';
import { OrderDetailsPage } from './pages/OrderDetailsPage';
import { ProductFormPage } from './pages/ProductFormPage';


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
        <Route path='/profile' element={<ProfilePage />}  />
        <Route path='/products' element={<AllProducts />}  />
        <Route path='/product/:id' element={<ProductPage />}  />
        <Route path='/product/:id/edit' element={<ProductFormPage />}  />
        <Route path='/cart/:id' element={<CartPage />}  />
        <Route path='/cart' element={<CartPage />}  />
        <Route path='/shipping' element={<ShippingPage />}  />
        <Route path='/payment' element={<PaymentPage />}  />
        <Route path='/order' element={<OrderPage />}  />
        <Route path='/order/:id' element={<OrderDetailsPage />}  />
      </Routes>
    </Container>
    </main>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
