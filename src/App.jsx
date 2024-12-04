import PostsList from "./Components/PostsList";
import MainHeader from "./Components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalhandler() {
    setModalIsVisible(true);
  }
  function hideModalhandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalhandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalhandler}
        />
      </main>
    </>
  );
}

export default App;

//the return statemtn can return only one HTML tag , thats why we use <> [react Fragment] or <main> to cover all tags inside it
