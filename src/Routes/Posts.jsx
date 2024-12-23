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

//the return statemtn can return only one HTML tag , thats why we use <> [react Fragment] or <main> to cover all tags inside it
