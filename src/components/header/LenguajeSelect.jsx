import React from 'react';
import LenguajeIcon from './LenguajeIcon';

const LanguageToggler = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    // Determine the current and new locales
    const currentLocale = currentPath.startsWith('/en') ? 'en' : 'es';
    const newLocale = currentLocale === 'en' ? 'es' : 'en';
    const newPath = currentLocale === 'en'
      ? currentPath.replace('/en', '')
      : `/en${currentPath}`;
      
    // Ensure the path is correct
    let updatedPath = newPath === '' ? '/' : newPath;
    
    // Redirect to the new path with hash
    window.location.href = updatedPath + currentHash;
  };

  return (
    <button
      type="button"
      aria-label={window.location.pathname.startsWith('/en') ? 'Switch to Spanish' : 'Switch to English'}
      id="language-toggler"
      className='hover:bg-[transparent] bg-[transparent] opacity-100'
      onClick={handleClick}
    >
      <LenguajeIcon />
    </button>
  );
};

export default LanguageToggler;
