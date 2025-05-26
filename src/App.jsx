import React, { useState } from "react";
import PostHeader from "./components/PostHeader";
import PostContent from "./components/PostContent";
import PostActions from "./components/PostActions";

function App() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [postText, setPostText] = useState("");

  const handleAdd = () => {
    setShowInput(true); // textarea + 등록 버튼 보이기
  };

  const handleRegister = () => {
    setPostText(inputValue); // 입력한 값을 본문에 반영
    setInputValue(""); // 입력창 초기화
    setShowInput(false); // 입력창 숨기기 (선택)
  };

  const handleDelete = () => {
    setPostText(""); // 글 내용 삭제
  };

  return (
    <div className="App" style={{ padding: "1rem" }}>
      <PostHeader
        title="오늘 뭐 먹을까?"
        team="Team 1"
        //views={1234}
        //date="2025.05.26"
        onAdd={handleAdd}
        onDelete={handleDelete}
        onEdit={() => alert("수정 클릭")}
      />

      {showInput && (
        <div style={{ margin: "1rem 0" }}>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            rows="4"
            cols="50"
            placeholder="내용을 입력하세요"
          />
          <br />
          <button onClick={handleRegister}>등록</button>
        </div>
      )}

      {postText && <PostContent text={postText} />}

      <hr></hr>
      <PostActions></PostActions>
    </div>
  );
}

export default App;
