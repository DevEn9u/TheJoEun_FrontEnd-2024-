import { useContext } from 'react';
import { ThemeContext } from '../App';
import logo from '../assets/react.svg';

export default function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${isDarkMode ? 'dark_theme' : 'light_theme'}`}>
      <h2 className='blind'>Header</h2>
      <div className="logo_wrap">
        <img src={logo} alt="" />
        <button type="button" onClick={toggleTheme} className="btn">
          Toggle {isDarkMode ? 'Light' : 'Dark'} Theme
        </button>
      </div>
    </header>
  );
}
