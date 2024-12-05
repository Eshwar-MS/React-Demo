import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import { useState } from "react";

function PostsList(props) {
  return (
    <>
      {props.isPosting ? (
        <Modal onHide={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} />
        </Modal>
      ) : (
        false
      )}
      <ul className={styles.posts}>
        <Post author="Ashish" message="React is very convenient to use !!" />
      </ul>
    </>
  );
}

export default PostsList;
