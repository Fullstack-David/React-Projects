import { useState } from 'react'
import "./components/Card.css"


import ShowCards from './components/ShowCards';


export default function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <h1 className='div-container-header'>The Board App</h1>
      <ShowCards items={items} setItems={setItems} />
     
      
    </>
  );
}


