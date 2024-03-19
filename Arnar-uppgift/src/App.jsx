import { useState } from 'react'

import Card from './components/Card'


export default function App() {
  

  return (
    <>
      <h1 className='div-container-header'>The Board App</h1>
      <div className='div-container'>
        <Card
          title="Todo"
          bgColor="#D3D3D3"
          
          // addTask={addTask}
          // setAddask={setAddTask}
        />
        <Card title="Doing"
          bgColor="#FCB711"
          color="white"
        />
        <Card title="Done"
          bgColor="#00873D"
          color="white"
        />
      </div>
    </>
  );
}


