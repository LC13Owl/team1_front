function PostInputArea({ inputValue, setInputValue, onSubmit, isEditing }) {
  return (
    <div className="input-area">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        rows="4"
        cols="50"
        placeholder="내용을 입력하세요"
      />
      <br />
      <button onClick={onSubmit} className="register">
        {isEditing ? "수정 완료" : "등록"}
      </button>
    </div>
  );
}

export default PostInputArea;
