import styles from "./Modal.module.css";

function Modal(props) {
  //div for blurred screen
  //dialog for the content
  return (
    <>
      <div className={styles.backdrop} onClick={props.onHide} />
      <dialog open className={styles.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
