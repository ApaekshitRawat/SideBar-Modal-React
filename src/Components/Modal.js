import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { modal, closeModal } = useGlobalContext();
  return (
    <div className={`${modal ? `modal-overlay show-modal` : `modal-overlay`} `}>
      <div className="modal-container">
        <h4>
          This is a Modal and sidebar component where I have used the context
          Api to globaly declare the hooks and then use them in the components
          whithout prop drilling them!!
        </h4>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
