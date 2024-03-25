
import { RiCloseLine } from "react-icons/ri";
import "./Modal.css"

export default function Modal({setIsOpen}) {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)}>
        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              <h5 className="heading">Dialog</h5>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
