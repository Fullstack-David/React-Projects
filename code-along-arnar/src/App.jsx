import {  useEffect, useState} from 'react'

import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("")
  const [search, setSearch] = useState("")
  const [fetchError, setFetchError] = useState(null)


//useEffect

// console.log('Före useEffect')
  useEffect(() => {
    // console.log('Kör useEffect')
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error ("Did not recieve expected data!")
        const listItems = await response.json();

        setItems(listItems);
      } catch {
        setFetchError(err.message);
        console.log(fetchError)
      }
    }
    fetchItems();

  },[items])
  // console.log('efter useEffect')





  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems);
  //   localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem];
    // setAndSaveItems(listItems)
    setItems(listItems);
    
  }
  
  const handleCheck = (id) => {
    
    const listItems = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
    );
    // setAndSaveItems(listItems);   
    setItems(listItems);
}

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems);
   
  }
  
  
  return (
    <div className='App'>    
      <Header titel="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      {fetchError && <p style={{ color: red }}>{`Error ${fetchError}`}</p>}
      {!fetchError && (
      <Content
        items={items.filter((item) => 
          item.item.toLowerCase().includes(search.toLowerCase()))}
        
        handleCheck={handleCheck}
        handleDelete={handleDelete}

      />
      )}
      
      <Footer length={items.length} />

    </div>
  )
}

export default App


// npx json-server -p 3500 -w data/db.json
// CRUD