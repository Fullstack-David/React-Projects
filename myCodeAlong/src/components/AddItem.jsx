import {FaPlus} from "react-icons/fa"
export default function AddItem({newItem, setNewItem, handleSubmit}){
  return (
      
          <form
            className="addForm"
            onSubmit={handleSubmit}
          >
              <label htmlFor="addItem"></label>
              <input
                  type="text"
                  autoFocus id="addItem"
                  placeholder="Add item"
                  required
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                
              />
              <button
                  type="submit"
                  arial-label="Add item"
              >
                  <FaPlus/>
              </button>
          </form>
  
  )
}

