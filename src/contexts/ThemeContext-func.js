import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = useState({ isLightTheme: true });
  const [light, setLight] = useState({
    syntax: '#555',
    ui: '#ddd',
    bg: '#eee',
  });
  const [dark, setDark] = useState({ syntax: '#ddd', ui: '#333', bg: '#555' });

  const toggleTheme = () => {
    console.log('Toggle');
    setIsLightTheme({ isLightTheme: !isLightTheme });
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, dark, light, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
