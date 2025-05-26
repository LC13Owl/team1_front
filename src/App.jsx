import React, { useState } from "react";
import PostHeader from "./components/PostHeader";
import PostContent from "./components/PostContent";
import PostActions from "./components/PostActions";

function App() {
  const [showInput, setShowInput] = useState(false); // 입력창 표시 여부
  const [inputValue, setInputValue] = useState(""); // 입력 중인 텍스트
  const [postText, setPostText] = useState(""); // 실제 등록된 게시글 내용
  const [isEditing, setIsEditing] = useState(false); // 수정 중 여부

  // [추가] 버튼 클릭 → 새 글 입력
  const handleAdd = () => {
    setShowInput(true);
    setInputValue("");
    setIsEditing(false);
  };

  // [수정] 버튼 클릭 → 기존 내용 불러와서 편집
  const handleEdit = () => {
    setShowInput(true);
    setInputValue(postText);
    setIsEditing(true);
  };

  // [등록] 버튼 클릭 → 새 글이든 수정이든 저장
  const handleRegister = () => {
    if (inputValue.trim() === "") return;
    setPostText(inputValue);
    setInputValue("");
    setShowInput(false);
    setIsEditing(false);
  };

  // [삭제] 버튼 클릭
  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setPostText("");
      setInputValue("");
      setShowInput(false);
      setIsEditing(false);
    }
  };

  return (
    <div className="App" style={{ padding: "1rem" }}>
      <PostHeader
        title="오늘 뭐 먹을까?"
        team="Team 1"
        onAdd={handleAdd}
        onDelete={handleDelete}
        onEdit={handleEdit} // ✅ 수정 기능 연결
      />

      {/* 입력창 */}
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
          <button onClick={handleRegister} style={{ marginTop: "0.5rem" }}>
            {isEditing ? "수정 완료" : "등록"}
          </button>
        </div>
      )}

      {/* 게시글 본문 */}
      {postText && <PostContent text={postText} />}

      <hr />
      <PostActions />
    </div>
  );
}

export default App;
