import { useState } from "react";
import {FaTrashAlt} from "react-icons/fa"
import ItemList from "./ItemList";

export default function Content({items, handleCheck, handleDelete}) {
   
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
}

