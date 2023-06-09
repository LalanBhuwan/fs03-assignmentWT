
import './App.css';
import Nav from "./Components/Nav";
import Section from './Components/Section';
import SectionFeatures from './Components/SectionFeatures';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Section/>
      <SectionFeatures/>
      <Footer/>
    </div>
  );
}

export default App;
