import PostsList from "../Components/PostsList";
import { Outlet } from "react-router-dom";
function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}

//the return statemtn can return only one HTML tag , thats why we use <> [react Fragment] or <main> to cover all tags inside it
