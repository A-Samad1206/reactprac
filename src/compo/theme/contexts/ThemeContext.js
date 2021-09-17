import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const light = { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark = { syntax: '#ddd', ui: '#333', bg: '#555' };

  const [isLightTheme, setTheme] = useState(true);
  const toggleTheme = () => setTheme(!isLightTheme);
  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
