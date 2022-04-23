import './App.css';
import { Container } from 'react-bootstrap';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      <NavHeader />
      <main className='py-4' >
        <Container>
          <div className="header mb-5">
            <h1 className="heading">SneakerSource | Welcome</h1>
          </div>
          <Home/>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
