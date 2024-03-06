import { useState } from "react"



const Person = () => {
    const [name, setName] = useState('David');
    const [titel, setTitel] = useState('Student');
    const [age, setAge] = useState(30);
    const [isEmployed, setIsEmployed] = useState(false);

    function uppdateName(e) {
        setName(e.target.value);
    }

    function uppdateAge() {
        setAge(age + 1);
    }

    function uppdateTitel() {
        setTitel('Teacher')
    }

    function toggleStatus(e) {
        setIsEmployed(!isEmployed)
    }

  return (
      <div className="person">
          <h3>Name: {name}</h3>
          {/* <button className="button" onClick={uppdateName}>Click me</button> */}
          <input className="input" type="text" onChange={(e) => uppdateName(e)}/>

          <h3>Age: {age}</h3>
          <button className="button" onClick={uppdateAge}>Age</button>

          <h3>Titel: {titel}</h3>
          <button className="button" onClick={uppdateTitel}>Titel</button>

          <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
          <button className="button" onClick={toggleStatus}>Klicka</button>




    </div>
  )
}

export default Person