import React, { useState } from "react";
import PostHeader from "./components/PostHeader"; // 상단 제목, 팀, 버튼 있는 헤더
import PostContent from "./components/PostContent"; // 작성된 게시글 내용 보여주는 영역
import PostActions from "./components/PostActions"; // 좋아요, 댓글 등 추가 액션 영역

import "./App.css";

// 리액트 앱의 메인 컴포넌트
function App() {
  // 상태 정의
  const [showInput, setShowInput] = useState(false); // 입력창 보이기 여부
  const [inputValue, setInputValue] = useState(""); // 입력 중인 글 내용
  const [postText, setPostText] = useState(""); // 등록된 게시글 내용
  const [isEditing, setIsEditing] = useState(false); // 수정 중인지 여부
  const [postTime, setPostTime] = useState(null); // 게시글 등록 시각
  const [views, setViews] = useState(0); // 조회수

  // 글쓰기 버튼 눌렀을 때 실행되는 함수
  const handleAdd = () => {
    setShowInput(true);
    setInputValue(""); // 입력창 비우기
    setIsEditing(false); // 작성 모드로 전환
  };

  // 수정 버튼 눌렀을 때 실행되는 함수
  const handleEdit = () => {
    setShowInput(true);
    setInputValue(postText); // 기존 글 불러오기
    setIsEditing(true); // 수정 모드로 전환
  };

  // 등록 or 수정 버튼 눌렀을 때 실행
  const handleRegister = () => {
    if (inputValue.trim() === "") return; // 내용 없으면 등록 안 됨

    const isNewPost = !postText; // 기존 글이 없으면 신규 작성

    setPostText(inputValue); // 게시글 저장
    setPostTime(new Date()); // 현재 시간 저장

    if (isNewPost) {
      setViews((prev) => prev + 1); // 새 글이면 조회수 1 증가
    }

    // 입력창 닫고 초기화
    setInputValue("");
    setShowInput(false);
    setIsEditing(false);
  };

  // 삭제 버튼 눌렀을 때 실행
  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setPostText(""); // 글 내용 삭제
      setInputValue(""); // 입력창 초기화
      setShowInput(false);
      setIsEditing(false);
    }
  };

  return (
    <div className="app">
      {/* 상단 헤더 */}
      <PostHeader
        title="오늘 뭐 먹을까?"
        team="Team 1"
        date={postTime}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {/* 입력창 영역: 글쓰기/수정 모드일 때만 표시 */}
      {showInput && (
        <div className="input-area">
          <textarea
            value={inputValue} // 현재 입력값
            onChange={(e) => setInputValue(e.target.value)} // 입력 시 상태 업데이트
            rows="4"
            cols="50"
            placeholder="내용을 입력하세요"
          />
          <br />
          <button onClick={handleRegister} className="register">
            {isEditing ? "수정 완료" : "등록"}{" "}
            {/* 수정 여부에 따라 버튼 텍스트 변경 */}
          </button>
        </div>
      )}

      {/* 등록된 게시글이 있을 경우 출력 */}
      {postText && (
        <PostContent text={postText} date={postTime} views={views} />
      )}

      <hr />

      {/* 좋아요, 댓글 같은 후속 액션 버튼 */}
      <PostActions />
    </div>
  );
}

export default App;
