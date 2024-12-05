import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import { useState } from "react";

function PostsList(props) {
  const [posts, setPosts] = useState([]);

  function addPostsHandler(postData) {
    setPosts((existingData) => [postData, ...existingData]);
  }

  return (
    <>
      {props.isPosting ? (
        <Modal onHide={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAddPost={addPostsHandler} />
        </Modal>
      ) : (
        false
      )}
      <ul className={styles.posts}>
        {posts.map((post, index) => (
          <Post key={index} author={post.name} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostsList;
