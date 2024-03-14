import { FaTrashCan } from "react-icons/fa"

export default function LineItem({item, handleCheck, handleDelete}) {
    return (
        <li className="item">
                
        <input
          type="checkbox"
          onChange={() => handleCheck(item.id)}
          checked={item.checked}         
       />
       
      
        <label
          onDoubleClick={() => handleCheck(item.id)}
          style={item.checked ? { textDecoration: "line-through" } : null}
        >{item.item}
        </label>

        <FaTrashCan
          onClick={() => handleDelete(item.id)}
          roll="button"
          tabIndex="0"
          aria-label={`delete ${item.item}`}
         
        />
      </li>
    );
}

