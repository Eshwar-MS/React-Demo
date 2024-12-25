import classes from "./NewPost.module.css";
import Modal from "../Components/Modal";
import { Link } from "react-router-dom";

function NewPost() {
  //The useState() hook not only stores a value but also tells React to re-render the component whenever the state is updated. //any chsnges in these two states the whole (PostsList ) component will be rendered againn
  // updatedText: A state variable that holds the current value of the textarea.
  // setUpdatedText: A function provided by useState to update the value of updatedText.
  // Initial Value: The state is initialized with an empty string ("").

  return (
    <Modal>
      <form className={classes.form}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}
// .. = going up one level , here it is back to homepage  // similar to '/'
export default NewPost;

export function action() {
  fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
