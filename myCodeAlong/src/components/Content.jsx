import ItemList from "./ItemList"

export default function Main({items, handleCheck, handleDelete}) {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />) : ( 
          <p style={{marginTop: "2rem", textAlign: "center"}}>Your list is empty</p>
      )}
    </main>
  )
}

 