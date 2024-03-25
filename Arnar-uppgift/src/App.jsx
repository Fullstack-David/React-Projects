import { useState } from 'react'
import "./components/Card.css"

import ShowCards from './components/ShowCards';
import ListItem from './components/ListItem';
import OpenInput from "./components/OpenInput";
import Column from './components/Column';

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <h1 className='div-container-header'>The Board App</h1>
      <ShowCards items={items} setItems={setItems} />
     
      
    </>
  );
}


