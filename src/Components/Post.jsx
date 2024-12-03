//capital names for files containing React components

function Post(props) {
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.message}</p>
    </div>
  );
}

export default Post;
