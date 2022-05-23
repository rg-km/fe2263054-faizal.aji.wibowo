// TODO: answer here
import "./App.css";
import React from "react";
import "./index.css";

export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here
  <nav aria-label="Post Card" className="Post" ref="post">
    <header aria-label="Post User Name">
      <div className="post-user">
        <div className="user-img">
          <img src="logo.svg" alt="user-imgg" />
        </div>
        <div className="user-name">
          <span>{username}</span>
        </div>
      </div>
    </header>
    <div aria-label="Post Image" className="post-img">
      <div className="post-img-bg">
        <img src={image} alt="post-img" />
      </div>
    </div>
    <div aria-label="Post Caption" className="post-cap">
      <strong>{username}</strong> {caption}
    </div>
    <div aria-label="Post Date" className="post-date">
      <p>{date}</p>
    </div>
  </nav>;
}
