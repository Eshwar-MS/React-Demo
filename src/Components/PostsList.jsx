import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import { useState } from "react";

function PostsList(props) {
  const [updatedText, setUpdatedText] = useState("");
  const [updatedAuthor, setUpdatedAuthor] = useState("");
  //The useState() hook not only stores a value but also tells React to re-render the component whenever the state is updated. //any chsnges in these two states the whole (PostsList ) component will be rendered againn
  // updatedText: A state variable that holds the current value of the textarea.
  // setUpdatedText: A function provided by useState to update the value of updatedText.
  // Initial Value: The state is initialized with an empty string ("").

  function bodyChangeHandler(event) {
    setUpdatedText(event.target.value);
    //setUpdatedText(event.target.value) updates the state with the new value, triggering a re-render.
  }
  function authorChangeHandler(event) {
    setUpdatedAuthor(event.target.value);
  }
  return (
    <>
      {props.isPosting ? (
        <Modal onHide={props.onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : (
        false
      )}
      <ul className={styles.posts}>
        <Post author={updatedAuthor} message={updatedText} />
        <Post author="Ashish" message="React is very convenient to use !!" />
      </ul>
    </>
  );
}

export default PostsList;
