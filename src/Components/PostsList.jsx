import Post from "./Post";
import styles from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={styles.posts}>
      <Post author="Eshwar" message="I am Coding with React !!" />
      <Post author="Ashish" message="React is very convenient to use !!" />
    </ul>
  );
}

export default PostsList;
