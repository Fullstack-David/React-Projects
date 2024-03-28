// DENNA KOMPONENTS ÄR BARA TILL MIN TODO-LISTA
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { format } from "date-fns"
import { sv } from "date-fns/locale";

   
export default function ListItem({ items, setItems, setIsOpen, setActiveItem}) {
        
    const [newItem, setNewItem] = useState("");
    
   
    function handleAddNewItem(e) {
        const newItemObject = {
            text: newItem,                              
            createdAt: format(new Date(), "MMMM dd, yyyy - H:mm", { locale: sv })
        };
       
        if (newItem !== "") {
            setItems([...items, newItemObject])
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
                    onClick={() => handleListItemClick(item)}
                >
                    <h4>{item.text}</h4>
                    {item.createdAt} 
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

