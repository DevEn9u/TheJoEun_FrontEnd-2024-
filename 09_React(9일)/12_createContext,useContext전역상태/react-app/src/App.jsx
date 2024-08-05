

import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const ThemeContext = createContext(null);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className='container'>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <Header />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}
