import React, { useState } from "react";
import "./PostActions.css"; //

function PostActions() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="post-actions">
      <button onClick={handleLike}>👍 {likes}</button>
      <button onClick={handleDislike}>👎 {dislikes}</button>
    </div>
  );
}

export default PostActions;
