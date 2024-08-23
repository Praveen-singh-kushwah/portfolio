import './App.css';
import Aboutme from './component/aboutMe/Aboutme';
import Intro from './component/intro/Intro';
import Navbar from './component/navbar/Navbar';
import Project from './component/project/Project';
import Service from './component/service/Service';
import Skill from './component/skills/Skill';
import Contact from './component/contact/Contact';
import Bottom from './component/bottom/Bottom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Aboutme/>
      <Skill/>
      <Service/>
      <Project/>
      <Contact/>
      <Bottom/>
    </div>
  );
}

export default App;
