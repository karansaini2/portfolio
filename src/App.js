import Navbar from "./Home/Navbar";
import Profile from "./Home/Profile";
import About from "./About/About";
import "./App.css";
import Projects from "./Projects/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Profile />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
