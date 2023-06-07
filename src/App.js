import React, { useState } from 'react';
import './App.css';
import './styles/animations.css';
import Navbar from './components/navbar';
import Sponsor from './components/sponsor';
import Pamphlet from './components/pamphlet';
import Goal from './components/goal';
import Prizes from './components/prizes';
import Date from './components/date';
import Form from './components/form';
import Footer from './components/footer';
import NavbarMobile from './components/navbarMobile';
import './styles/responsive.css';

function App() {
  const [navbarMobileClass, setNavbarMobileClass] = useState('');
  const [openButtonClass, setOpenButtonClass] = useState('');
  const [closeButtonClass, setCloseButtonClass] = useState('');

  const handleButtonClick = () => {
    setNavbarMobileClass('active');
    setOpenButtonClass('active');
    setCloseButtonClass('active');
    console.log('activar');
  };

  const handleButtonClick2 = () => {
    setNavbarMobileClass('desactive');
    setOpenButtonClass('desactive');
    setCloseButtonClass('');
    console.log('desactivar');
  };

  console.log(`closeNavbar ${closeButtonClass}`)

  return (
    <div className="App">
      <NavbarMobile className={navbarMobileClass} />
      <button className={`openNavbar ${openButtonClass}`} onClick={handleButtonClick}></button>
      <button className={`closeNavbar ${closeButtonClass}`} onClick={handleButtonClick2}></button>
      <Navbar />
      <Pamphlet />
      <Goal />
      <Prizes />
      <Sponsor />
      <Date />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
