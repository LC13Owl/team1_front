import React, { useState } from "react";
import "./PostActions.css"; //

function PostActions() {
  const [likes, setLikes] = useState(0); //좋아요를 useState로 설정하여 like랑 setLikes
  const [dislikes, setDislikes] = useState(0); //싫어요를 useState로 설정하여 dislikes랑 setdislikes

  const handleLike = () => {
    //handleLike라는 이벤트 핸들러를 써서 내부에서 setLikes를 호출하여 증가하게 함
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    //handDislike도 dislike호출
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
