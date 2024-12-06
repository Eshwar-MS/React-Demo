import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import { useEffect, useState } from "react";

function PostsList(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
    }
    fetchPosts();
  }, []);

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
