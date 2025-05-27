import React, { useState } from "react";
import PostHeader from "./components/PostHeader";
import PostContent from "./components/PostContent";
import PostActions from "./components/PostActions";
import "./App.css";

import { useEffect } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [postText, setPostText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [postTime, setPostTime] = useState(null);
  const [views, setViews] = useState(0);

  const handleAdd = () => {
    setShowInput(true);
    setInputValue("");
    setIsEditing(false);
  };

  const handleEdit = () => {
    setShowInput(true);
    setInputValue(postText);
    setIsEditing(true);
  };
  const handleRegister = () => {
    if (inputValue.trim() === "") return;

    const isNewPost = !postText;

    setPostText(inputValue);
    setPostTime(new Date());

    if (isNewPost) {
      setViews((prev) => prev + 1);
    }

    setInputValue("");
    setShowInput(false);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setPostText("");
      setInputValue("");
      setShowInput(false);
      setIsEditing(false);
    }
  };

  return (
    <div className="app">
      <PostHeader
        title="오늘 뭐 먹을까?"
        team="Team 1"
        date={postTime}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {showInput && (
        <div className="input-area">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            rows="4"
            cols="50"
            placeholder="내용을 입력하세요"
          />
          <br />
          <button onClick={handleRegister} className="register">
            {isEditing ? "수정 완료" : "등록"}
          </button>
        </div>
      )}

      {postText && (
        <PostContent text={postText} date={postTime} views={views} />
      )}
      <hr />
      <PostActions />
    </div>
  );
}

export default App;
