import PostsList from "./Components/PostsList";

function App() {
  return (
    <>
      <PostsList />
    </>
  );
}

export default App;

//the return statemtn can return only one HTML tag , thats why we use <> [react Fragment] or <main> to cover all tags inside it
