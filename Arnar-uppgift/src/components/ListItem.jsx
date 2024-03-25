// DENNA KOMPONENTS ÄR BARA TILL MIN TODO-LISTA
import { useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import Modal from "./Modal";

export default function ListItem({ items, setItems, isOpen, setIsOpen }) {
    const [newItem, setNewItem] = useState("");

    function handleAddNewItem(e) {
        if (newItem !== "") {
            setItems([...items, newItem])
            setNewItem(""); // Korrekt sätt att rensa inputfältet
        }
    }

    function handleListItemClick() {
        setIsOpen(true); // Öppnar modalen när en li-element klickas
    }

    return (
        <ul>
            {items.map((item, index) =>(
                <li
                    className="li-list"
                    key={index}
                    onClick={handleListItemClick}>{item}
                </li>))}                
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Set new item"
            />
            <div className="add-list">
                <BiPlusMedical style={{ marginLeft: "1rem" }} />
            <button onClick={handleAddNewItem}>Skapa ny uppgift
            </button>
            </div>
            {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen}/> */}

        </ul>
    );
}

 