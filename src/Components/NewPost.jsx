import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost(props) {
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

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      name: updatedAuthor,
      text: updatedText,
    };
    props.onCancel();
    console.log(postData);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
