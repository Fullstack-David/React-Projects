import {FaTrashAlt} from "react-icons/fa"


export default function LineItem({item, handleCheck, handleDelete}){
  return (
    <li className="item">
    <input
      type="checkbox"
      onChange={() => handleCheck(item.id)}
      checked={item.checked}            
    />
    <label
      onDoubleClick={() => handleCheck(item.id)}
      style={item.checked ? {textDecoration: "line-through"} : null}
    >{item.item}</label>
    <FaTrashAlt
      onClick={() => handleDelete(item.id)}
      role="button"
      tabIndex={0}
      aria-aria-label="delete item"
    
    
    />
  </li>
  )
}

