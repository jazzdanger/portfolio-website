import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Roles from './components/Roles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="section-fade"><Hero /></div>
      <div className="section-fade"><About /></div>
      <div className="section-fade"><Skills /></div>
      <div className="section-fade"><Projects /></div>
      <div className="section-fade"><Certifications /></div>
      <div className="section-fade"><Roles /></div>
      <div className="section-fade"><Contact /></div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;