import { useState } from "react";

export default function Skill() {
    const [skills, setSkills] = useState(["JavaScript", "TypeScript", "React"])
 
    // Add skills
    function handleAddSkill(e) {
        const newSkill = document.getElementById("skillInput").value;
        document.getElementById("skillInput").value = "";
        setSkills((prevSkills)=>[...prevSkills,newSkill]);       
    }

    // Remove skills
    function handleRemoveSkill(index) {
        setSkills(skills.filter((skill, i) => i !== index))
    }


     return (
         <div className="div-container">
             <h2>My Skills</h2>
             <hr />
             <ul>
                 {skills.map((skill, index) => (
                     <li
                         className="checkmark"
                         key={index}
                         onDoubleClick={() =>handleRemoveSkill(index)}>
                      {skill}
                     </li>
                 ))}
             </ul>
             <input
                 id="skillInput"
                 type="text"
                 placeholder="Enter a skill"
             />
             <button onClick={handleAddSkill}>Add skill</button>
          
         </div>
     );
}

