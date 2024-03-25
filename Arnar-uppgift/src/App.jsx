import { useState } from 'react'
import "./components/Card.css"
import "./index.css"

import ShowCards from './components/ShowCards';
import Modal from './components/Modal';


export default function App() {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1 className='div-container-header'>The Board App</h1>
      <ShowCards items={items} setItems={setItems} />
      {/* <Modal/>
      <main>
        <button className='primaryBtn' onClick={() => setIsOpen(true)}>
          Open modal
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen}/>}
      </main> */}
     
      
    </>
  );
}


