//capital names for files containing React components
import styles from "./Post.module.css"; //For importing css files in jsx files
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <div className={styles.post}>
      <Link to={props.id}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.text}>{props.body}</p>
      </Link>
    </div>
  );
}

export default Post;
