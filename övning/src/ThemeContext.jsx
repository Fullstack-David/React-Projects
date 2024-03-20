import { createContext, useState } from "react";

/* Skapar en ny Context, vilket är ett sätt att dela värden mellan komponenter
   utan att behöva skicka props genom varje nivå av komponentträdet.
   Initialvärdet här är ett tomt objekt. */
export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export default ThemeContext;