import './App.css';
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import ProjectSection from './components/projectSection';
import Form from "./components/Form";
import Footer from "./components/Footer";
function App() {
  
  return (
    <div className="Main">
      <Header />
      <LandingSection />
      <ProjectSection/>
      <Form className="pro"/>
      <Footer/>
  
    </div>
  );
}

export default App;
