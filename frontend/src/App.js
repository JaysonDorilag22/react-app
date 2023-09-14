import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Title from './components/Title.js';
function App() {
  return (
    
    <div className="App">
      <Nav/>
      <Header />
      <Title title="My Post"/>
      <Footer />
    </div>
    
  );
}

export default App;
