import Post from "./Components/Post";

function App() {
  return (
    <>
      <Post author="Eshwar" message="I am Coding with React !!" />
      <Post author="Ashish" message="React is very convenient to use !!" />
    </>
  );
}

export default App;

//the return statemtn can return only one HTML tag , thats why we use <> [react Fragment] or <main> to cover all tags inside it
