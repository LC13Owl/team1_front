function PostInputArea({ inputValue, setInputValue, onSubmit, isEditing }) {
  return (
    <div className="input-area">
      <textarea
        value={inputValue} // 입력창에 표시될 텍스트 (상태값)
        onChange={(e) => setInputValue(e.target.value)} //사용자가 입력할 때ㅏ다 상태값이 바뀜
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
