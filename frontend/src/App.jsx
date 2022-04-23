import './App.css';
import { Container } from 'react-bootstrap';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <NavHeader />
      <main className='py-4' >
        <Container>
          <h1>SneakerSource | Welcome</h1> 
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
