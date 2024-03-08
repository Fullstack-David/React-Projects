import { Counter } from "./components/Counter"
import UserInput from "./components/UserInput"


import { useState } from "react"

import ColorDisplay from "./components/ColorDisplay"
import ColorInput from "./components/ColorInput"



function App() {
  const [color, setColor] = useState("")
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <>
      {/* <UserInput  /> */}
      {/* <Counter/> */}
      <ColorDisplay color={color} isDarkText={ isDarkText} />
      <ColorInput color={color} setColor={setColor} isDarkText={isDarkText} setIsDarkText={setIsDarkText } />
      
    </>
  )
}

export default App
