import {FaPlus} from "react-icons/fa"

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    return (
        <div>
            <form
                className="addForm"
                onSubmit={handleSubmit}
            >
                <label htmlFor="addItem"></label>
                <input
                    type="text"
                    autoFocus id='addItem'
                    placeholder='Add item'
                    required
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                
                <button
                    type='submit'
                    arial-label="Add Item">
                   < FaPlus/>
                </button>
            </form>
          
        </div>
    );
}

export default AddItem