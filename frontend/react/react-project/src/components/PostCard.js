// TODO: answer here
import React, { useState } from "react";
import "../App.css";
import "../index.css";
import LikeDislikeButon from "../components/LikeDislikeButton";
export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here
  const [like] = useState(0);
  const [dislike] = useState(0);
  const [isLikeButton] = useState(false);

  return (
    <div className="Component" aria-label="Post Card">
      <div className="Image" aria-label="Image">
        <img src={image} alt="Images" aria-label="Post Image" />
        <section className="card-button">
          <LikeDislikeButon
            likeCount={like}
            dislikeCount={dislike}
            isLiked={isLikeButton}
          />
        </section>
        <div className="Nama" aria-label="Post User Name">
          {username}
          <div className="Caption" aria-label="Post Caption">
            {caption}
            <div className="Date" aria-label="Post Date">
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
