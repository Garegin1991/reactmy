import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
         <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
