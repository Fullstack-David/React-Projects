import { BiPlusMedical } from "react-icons/bi";
import { useState } from "react";

export default function Card({title, bgColor, color}) {
  const [addTask, setAddTask] = useState([]);

  
  function handleAddTask(e) {
    setAddTask(e.target.value)
    
  }


   

  return (
    <div className="card">
      {/* <div className="card-background"></div> */}
      <div className="card-content">
        <h2 className="card-head"
          style={{backgroundColor:bgColor, color:color}}
        >{title}</h2>
        <ul>
          <li style={{listStyleType:"none"}}>
            <input type="text"
              style={{padding:"1rem", width:"100%", borderRadius:"10px", marginTop:"2rem"}}
            />
          {/* <textarea
          placeholder="Add new tasks"
          type="text"
          onChange={(e)=> handleAddTask(e)}
          value={addTask}
        
            /> */}
            {/* <label></label> */}
        
        <div className="add-list">
          <BiPlusMedical
            style={{ marginLeft:"1rem" }} />
          <button
            className="card-add-btn"
            onClick={handleAddTask}
          >Skapa ny uppgift
          </button>
          
        </div>
          </li>
        </ul>

      </div>
    </div>
  );
}

 