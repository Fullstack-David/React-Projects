import { useState } from 'react'

import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: false,
        item: "Ett kilo äpplen",
      },
      {
        id: 2,
        checked: false,
        item: "kakor",
      },
      {
        id: 3,
        checked: true,
        item: "Kalles Kaviar",
      },
  ]);
  
  const handleCheck = (id) => {
    // console.log(`id: ${id}`)
    const listItems = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    localStorage.setItem("shoppinglIST", JSON.stringify(listItems));
}

const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems);
    localStorage.setItem("shoppinglIST", JSON.stringify(listItems));
    console.log(`id: ${id}`)
}
  
  

  return (
    <div className='App'>
     
      <Header titel="Grocery List"/>
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      <Footer length={items.length} />

    </div>
  )
}

export default App
