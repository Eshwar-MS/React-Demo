import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  const [updatedText, setUpdatedText] = useState("");
  //The useState() hook not only stores a value but also tells React to re-render the component whenever the state is updated.
  // updatedText: A state variable that holds the current value of the textarea.
  // setUpdatedText: A function provided by useState to update the value of updatedText.
  // Initial Value: The state is initialized with an empty string ("").

  function changeBodyHandler(event) {
    setUpdatedText(event.target.value);
    //setUpdatedText(event.target.value) updates the state with the new value, triggering a re-render.
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{updatedText}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
