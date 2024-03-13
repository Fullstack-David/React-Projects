import { useState } from 'react'

import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shopinglist")) || []);

  const [newItem, setNewItem] = useState("")
  const [search, setSearch] = useState("")

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglIST", JSON.stringify(newItems));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    console.log("Submitet")
    
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems)
    
  }
  
  const handleCheck = (id) => {
    // console.log(`id: ${id}`)
    const listItems = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);   
}

const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems);
    localStorage.setItem("shoppinglIST", JSON.stringify(listItems));
    console.log(`id: ${id}`)
}
  
  
  return (
    <div className='App'>    
      <Header titel="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={ search} setSearch={setSearch} />
      <Content
        items={items.filter((item) => 
          item.item.toLowerCase().includes(search.toLowerCase()))}
        
        handleCheck={handleCheck}
        handleDelete={handleDelete}

      />
      
      <Footer length={items.length} />

    </div>
  )
}

export default App
