import React, { createContext } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';


export type ThemeType = 'light' | 'dark';

export interface ThemeInterface {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

interface ThemeProviderInterface {
  children: React.ReactChildren
}

export const ThemeContext = createContext<ThemeInterface>({
  theme: 'dark',
  setTheme: () => {
    throw new Error(
      'Attemped to call set theme without ThemeProvider'
    );
  }
});

const ThemProvider: React.FC<ThemeProviderInterface> = ({ children }) => {
  const [theme, setThemeType] = useState<ThemeType>('light');

  const setTheme = useCallback((type: ThemeType) => {
    console.log('Theme', type)
    setThemeType(type);
  }, []);

  const themeContextProperties = {
    theme,
    setTheme,
  }

  return (
    <ThemeContext.Provider value={themeContextProperties}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemProvider;