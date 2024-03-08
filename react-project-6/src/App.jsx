import { useState } from "react"
import CR from "./CR"
import Number from "./Number"
import ColorDisplay from "./ColorDisplay"
import ColorInput from "./ColorInput"

function App() {
  // states
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [textInput, setTextInput] = useState("")

  // color-states
  const [color, setColor] = useState("")
  const [isDarkText, setIsDarkText] = useState(true)


  function handleLogin(e) {
    setIsLoggedIn(!isLoggedIn)
  }
  
  function handleInput(e) {
    setTextInput(e.target.value)
  }

  return (
    <>
      <div className="div-input">
        <h1>{textInput} </h1>
        <input className="target-input" type="text" value={textInput} onChange={(e) => handleInput(e)}
        />
      </div>
      {/* <CR
        username = "David"
        isLoggedIn = {isLoggedIn}
        setIsLoggedIn = {setIsLoggedIn}
        handleLogin = {handleLogin}
      /> */}
      {/* <CR username="David Heidari" isLoggedIn={true} /> */}
      <ColorDisplay color={color} isDarkText={isDarkText} />
      <ColorInput color={color} setColor={setColor} isDarkText={isDarkText} setIsDarkText={ setIsDarkText} />
      {/* <Number /> */}
      
      
    </>
  );
}

export default App
