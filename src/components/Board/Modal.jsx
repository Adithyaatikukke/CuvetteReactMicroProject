import modalCss from "./Modal.module.css";
import { useOutSideClick } from "../../hooks/useOutsideClick";
const Modal = ({ children, setShowModal }) => {
  const { ref, handleOutsideClick } = useOutSideClick(() => {
    setShowModal?.(false);
  });
  return (
    <div className={modalCss.overlay} onClick={handleOutsideClick}>
      <div className={modalCss.modal} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
