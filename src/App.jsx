import React, { useState } from "react";
import PostHeader from "./components/PostHeader";
import PostContent from "./components/PostContent";
import PostActions from "./components/PostActions";
import "./App.css";
import PostInputArea from "./components/PostInputArea";

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
        <PostInputArea
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSubmit={handleRegister}
          isEditing={isEditing}
        />
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
