import { useState } from "react";
import MainComponent from "./MainComponent";
import { ThemeProvider } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider>
      <div>
        <h1>Context-Intro</h1>
        <MainComponent theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;