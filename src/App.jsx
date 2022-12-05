import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Planos from "./components/Planos";
import About from "./components/About";
import Carrousel from "./components/Carrousel";
import Container from "./components/Container";
import Portfolio from "./components/Portfolio";
import SvgsContainer from './components/SvgsContainer';




function App() {
  return (
      <>  
        <Navbar/>
        <Container/>
        <SvgsContainer/>
        <About/>
        <Portfolio/>
        <Planos/>
        <Footer/>
      </>
  );
}

export default App;
