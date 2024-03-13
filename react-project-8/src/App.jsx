import Skill from "./components/Skill"
import { useState } from "react"
import Computer from "./components/Computer"
import ArrayOfObjects from "./components/ArrayOfObject"



function App() {
  const [progSkills, setProgSkills] = useState(["JavaScript", "TypeScript", "React"])
  const [foodSkills, setFoodSkills] = useState(["Koka", "äta", "dricka"])

  return (
    <>
      <h1>Måndag 11 mars</h1>
      <hr />
      <br />
      {progSkills.length > 0 && <Skill items={progSkills} setItems={setProgSkills} />}<br />
      {/* <Skill items={foodSkills} setItems={setFoodSkills} /> */}
      <Computer/> 
      <ArrayOfObjects />
    </>
  )
}

export default App
