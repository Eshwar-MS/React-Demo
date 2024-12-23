import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

function Modal(props) {
  //div for blurred screen
  //dialog for the content
  const navigate = useNavigate();
  function closeHandler() {
    navigate("/");
  }
  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler} />
      <dialog open className={styles.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
