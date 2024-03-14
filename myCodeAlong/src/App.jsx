import { useState } from 'react'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import AddItem from '../../code-along-arnar/src/components/AddItem';
import SearchItem from '../../code-along-arnar/src/components/SearchItem';

export default function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shopinglist")) || []);

  const [newItem, setNewItem] = useState("")
  const [search, setSearch] = useState("")



  function setAndSaveItems(newItems){
    setItems(newItems);
    localStorage.setItem("shopinglist", JSON.stringify(newItems));
}
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    
  }
  function addItem(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item}
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
}

  function handleCheck(id) {
    const listItems = items.map((item) => 
     item.id === id ? {...item, checked: !item.checked} : item
    )
    setAndSaveItems(listItems);   
  }

  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems); 
  }

  return (
    <div className='App'>
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
          )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      
      />
      <Footer length={items.length} />     
    </div>
  );
}


