import { useState } from "react";
import PropTypes from "prop-types"

export default function Skill({items, setItems}) {
    const [inputValue, setInputValue] = useState("")
 
    // Add skills
    function handleAddSkill(e) {
        setItems((prevSkills)=>[...prevSkills,inputValue]);
        // setInputValue("")       
    }

    // Remove skills
    function handleRemoveSkill(index) {
        setItems(items.filter((_, i) => i !== index))
    }
     return (
         <div className="div-container">
             <h2 className="skills-h2">My IT-Skills</h2>
             <hr />
             <ul>
                 {items.map((item, index) => (
                     <li
                         className="checkmark"
                         key={index}
                         onDoubleClick={() =>handleRemoveSkill(index)}>
                      {item}
                     </li>
                 ))}
             </ul>
             <input
                 className="skills-input"
                 id="skillInput"
                 type="text"
                 placeholder="Enter a skill"
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
             />
             <button onClick={handleAddSkill}>Add a skill</button>
          
         </div>
     );
}

Skill.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
}

