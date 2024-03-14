import { useState } from "react";
import ItemList from "./ItemList";

const Main = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem", textAlign: "center" }}>
          Your list is empty.
        </p>
      )}
    </main>
  );
};

export default Main

