import "./App.css";
// TODO: answer here
import React from "react";
import Navbar from "./components/Navbar";
import LikeDislikeButton from "./components/LikeDislikeButton";

function App() {
  // TODO: answer here
  return (
    <div aria-label="App" className="App">
      <h1 aria-label="App Title">IG Clone</h1>

      <div className="ImportItem">
        <Navbar />
        <LikeDislikeButton />
      </div>
    </div>
  );
}

export default App;
