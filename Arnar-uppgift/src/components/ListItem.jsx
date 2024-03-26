// DENNA KOMPONENTS ÄR BARA TILL MIN TODO-LISTA
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";


   
export default function ListItem({ items, setItems, isOpen, setIsOpen, setActiveItem }) {
        
    const [newItem, setNewItem] = useState("");
   

    function handleAddNewItem(e) {
        if (newItem !== "") {
            setItems([...items, newItem])
            setNewItem(""); 
        }
    }

    function handleListItemClick(item) {
        console.log(item)
        setActiveItem(item)    
        setIsOpen(true); // Öppnar modalen när en li-element klickas
    }
   

    return (
        <ul>
            {items.map((item, index) => (
                <li
                    className="li-list"
                    id="liItem"
                    key={index}
                    onClick={handleListItemClick}>{item}
                </li>))}
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <div className="add-list">
                <BiPlusMedical style={{ marginLeft: "1rem" }} />
                <button onClick={handleAddNewItem}>
                    Skapa ny uppgift
                </button>
            </div>
        </ul>
    );
}

 