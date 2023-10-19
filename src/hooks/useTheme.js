import { useState, useEffect } from 'react';

const useTheme = initialTheme => {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.className = initialTheme;
    // setCurrentTheme(initialTheme);
  }, [initialTheme]);

  const setTheme = theme => {
    document.documentElement.className = theme;
    setCurrentTheme(theme);
  };

  return [currentTheme, setTheme];
};

export default useTheme;