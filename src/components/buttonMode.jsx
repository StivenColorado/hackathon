import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../styles/navbar.css'; // Importa el archivo de estilos CSS para el componente
import icon1 from '../assets/dark.png'
import icon2 from '../assets/light.png'
const ThemeToggle = () => {
  const [theme, setTheme] = useState('theme-light');
  
  useEffect(() => {
    const savedTheme = Cookies.get('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (selectedTheme) => {
    const body = document.querySelector('body');
    body.classList.remove('theme-dark', 'theme-light');
    body.classList.add(`theme-${selectedTheme}`);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    Cookies.set('theme', newTheme, { expires: 365 });
    applyTheme(newTheme);

    // Mostrar el valor de la cookie en la consola
    console.log(Cookies.get('theme'));
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {/* Debes ajustar la ruta de la imagen a la ubicación correcta */}
      {theme === 'dark' ? (
        <img src={icon1}  />
      ) : (
        <img src={icon2} />
      )}
    </button>
  );
};

export default ThemeToggle;
