import './App.css';
import MyParticles from './components/Particles';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

/*

*/
function App() {

  return (
    <div className="App">
      <Navbar />
      <MyParticles />
      <div className='intro'>
        <h1 className='hi'>Hi, I'm Dillon</h1>
        <h4>A Full-Stack Developer looking to develop my skills and learn new things</h4>
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
