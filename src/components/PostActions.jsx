import React, { useState } from "react";

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
    <div
      className="post-actions"
      style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
    >
      <button onClick={handleLike} style={{ fontSize: "1.5rem" }}>
        👍 {likes}
      </button>
      <button onClick={handleDislike} style={{ fontSize: "1.5rem" }}>
        👎 {dislikes}
      </button>
    </div>
  );
}

export default PostActions;
