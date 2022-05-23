import "./App.css";
// TODO: answer here
import React from "react";
import Navbar from "./components/Navbar";
import LikeDislikeButton from "./components/LikeDislikeButton";
import PostCard from "./components/PostCard";

function App() {
  // TODO: answer here
  return (
    <div aria-label="App" className="App">
      <h1 aria-label="App Title">IG Clone</h1>

      <div className="ImportItem">
        <Navbar />
        <LikeDislikeButton />
        <PostCard />
      </div>
    </div>
  );
}

export default App;
