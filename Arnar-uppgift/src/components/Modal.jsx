
import { RiCloseLine } from "react-icons/ri";
import "./Modal.css"

export default function Modal({isOpen,setIsOpen}) {
 if (!isOpen) return null;
  
  
  function handleCloseBtn(e) {
    e.stopPropagation(); // Förhindrar event-bubbling
    setIsOpen(false);
    console.log("closeing modal")
  }
    

  return (
    
      <div className="darkBG" onClick={() => setIsOpen(false)}>
      <div className="centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal">
            <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
            </div>
            <button className="closeBtn" onClick={handleCloseBtn} >
            <RiCloseLine />          
            </button>
            <div className="modalContent">
              Här ska li-listan visas!!!
            </div>           
          </div>
        </div>
      </div>
    
  );
  
}
