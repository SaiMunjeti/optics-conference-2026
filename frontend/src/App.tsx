import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import Brochure from './pages/Brochure';
import Abstract from './pages/Abstract';
import Speakers from './pages/Speakers';
import Registration from './pages/Registration';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Sponsors from './pages/Sponsors';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="program">
        <Program />
      </div>
      <div id="brochure">
        <Brochure />
      </div>
      <div id="abstract">
        <Abstract />
      </div>
      <div id="speakers">
        <Speakers />
      </div>
      <div id="registration">
        <Registration />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="sponsors">
        <Sponsors />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
