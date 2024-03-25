import { useState } from "react";
import "./Card.css"
import Modal from "./Modal";

import ListItem from "./ListItem";

export default function Card({ title, bgColor, color, items, setItems, isOpen, setIsOpen }) {
  
  return (
    <div className="card">   
      <div className="card-content">
        <h2 
          style={{ backgroundColor: bgColor, color: color }}>{title}
        </h2>         
        
        <ListItem items={items} setItems={setItems} isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </div>
  );
}

 