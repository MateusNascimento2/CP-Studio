import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Planos from "./components/Planos";
import About from "./components/About";
import Container from "./components/Container";
import SvgsContainer from './components/SvgsContainer';




function App() {
  return (
      <>  
        <Navbar/>
        <Container/>
        <SvgsContainer/>
        <About/>
        <Planos/>
        <Footer/>
      </>
  );
}

export default App;
