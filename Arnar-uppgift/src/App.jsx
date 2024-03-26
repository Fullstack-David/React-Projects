import { useState } from 'react'
import "./components/Card.css"
import "./index.css"

import ShowCards from './components/ShowCards';


export default function App() {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null)
  // console.log('setActiveItem i App:', setActiveItem);
  //console.log("Hello", setActiveItem)
  

  return (
    <>
      <h1 className='div-container-header'>The Board App</h1>
      <ShowCards
         
        items={items}
        setItems={setItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeItem={activeItem}
        setActiveItem={setActiveItem}        
      />   
      
    </>
  );
}


