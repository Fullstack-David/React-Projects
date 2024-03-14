import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ItemList from './components/ItemList'
import LineItem from './components/LineItem'
import AddItem from "./components/AddItem"


export default  function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Tacoooos"

    },
    {
      id: 2,
      checked: false,
      item: "Fish nad potato"
    },
    {
      id: 3,
      checked: false,
      item: "Chicken and rice"
    }
  ]);

  /* denna funktion kollar om en checkbox är "checked", 
  om den är så visar den "true" och uppdaterar vår array 
  och skickar övriga elementen som de är.
  Så här mappar vi genom våra "items" varje "item" och sedan kör vi en ternery operator 
  om "item-id" har samma id som är targetad kör vi en "spread-operator", vilket innebär att 
  den går genom hela objektet och kollar om en "item" har blivit "triggad" om den är "false"
  visar den "true" och tvärrtom annars skcikar den resten i objected som den är.
  */
  function handleCheck(id) {
    const listItems = items.map((item) => 
      item.id === id ? { ...item, checked: !item.checked } : item);
    
    setItems(listItems)
    localStorage.setItem("shopingList", JSON.stringify(listItems));
    console.log(`id: ${id}`)
  }
/* 
  här triggar vi vår "FaTrashCan" för att ta bort ett element
  vi kör en filter-metod och detta betyder att 
  Sammanfattningsvis, denna kodrad filtrerar bort objekt från items-arrayen där objektets id inte är lika med det givna id. Resultatet av filtreringen lagras i listItems-variabeln.

*/
  function handleDelete(id) {
    const listItems = items.filter(item => item.id !== id) 
    setItems(listItems)
    localStorage.setItem("shopingList", JSON.stringify(listItems));
    
  }

  function handleCheck(id) {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    
  };



  return (
    <div className='App'>
      {/* <div className='background-img'></div> */}
      <Header titel="Grocery List" />
      <Main
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}     
      />
      <ItemList/>
      <LineItem/>
      <AddItem/>
      <Footer length={items.length} />
     
    </div>
  );
}


