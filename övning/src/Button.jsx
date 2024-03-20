import React from 'react'
import { useContext } from "react";
import ThemeContext  from "./ThemeContext";

export default function Button() {
    const {toggleTheme} = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>Byt thema</button>
  )
}
