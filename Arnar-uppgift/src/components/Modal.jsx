
import { RiCloseLine } from "react-icons/ri";
import "./Modal.css"

export default function Modal({setIsOpen}) {
    //  const [isOpen, setIsOpen] = useState(false);
  
  function handleBtn() {
  setIsOpen(false)
  }
    

  return (
    <>
      <div className="darkBG" onClick={() => handleBtn>
        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              <h5 className="heading">Dialog</h5>
            </div>
            <button className="closeBtn" onClick={() => handleBtn}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className="modalContent">
              Are you sure you want to delete the item?
            </div>
            <div className="modalActions">
              <div className="actionsContainer">
                <button className="deleteBtn" onClick={() => handleBtn}>
                  Delete
                </button>
                <button className="cancelBtn" onClick={() => handleBtn}>
                  Cancel
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
