import React from "react";
import Button from "./Button";
import { useContext } from "react";
import  ThemeContext  from "./ThemeContext";

const MainComponent = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "0.6rem",
        margin: "0.6rem 0",
      }}>
      <p>Det nuvarande temat är {theme}</p>
      <Button/>
    </div>
  );
};

export default MainComponent;
