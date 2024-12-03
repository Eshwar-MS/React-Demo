//capital names for files containing React components
import styles from "./Post.module.css"; //For importing css files in jsx files

function Post(props) {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.message}</p>
    </div>
  );
}

export default Post;
