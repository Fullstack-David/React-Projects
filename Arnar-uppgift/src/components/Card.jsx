import { useState } from "react";
import "./Card.css"

import ListItem from "./ListItem";

export default function Card({ title, bgColor, color, items, setItems }) {
  
  // const [addTask, setAddTask] = useState([]);

  
  // function handleAddTask(e) {
  //   setAddTask(e.target.value)
  //   console.log('hej')
    
  // }


  return (
    <div className="card">   
      <div className="card-content">
        <h2 
          style={{ backgroundColor: bgColor, color: color }}>{title}
        </h2>         
        
        <ListItem items={items} setItems={setItems} />
      </div>
    </div>
  );
}

 