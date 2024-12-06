import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import { useState } from "react";

function PostsList(props) {
  const [posts, setPosts] = useState([]);

  function addPostsHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.name} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some !!!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
