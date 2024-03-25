// DENNA KOMPONENTS ÄR BARA TILL MIN TODO-LISTA


import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";


export default function ListItem({ items, setItems }) {
    const [newItem, setNewItem] = useState("");

    function handleAddNewItem(e) {
        if (newItem !== "") {
            setItems([...items, newItem])
            setItems = "";
       }
    }

    return (
        <ul>
            {items.map((item, index) =>(
                <li className="li-list" key={index}>{item}</li>))}                
            <input type="text" value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Set new item"
            />
            <div className="add-list">
                <BiPlusMedical style={{ marginLeft: "1rem" }} />
            <button onClick={handleAddNewItem}>Skapa ny uppgift
            </button>
            </div>

        </ul>
    );
}

 