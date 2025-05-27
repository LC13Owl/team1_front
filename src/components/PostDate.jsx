import React from "react";

//한국시각을 가져오는 함수
const CustomDate = ({ date }) => {
  if (!date) return null; //날짜가 없다면 반환 X

  //YY:MM:DD 형식으로 불러오기
  const formatted = new Date(date).toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <span style={{ fontSize: "0.9rem", color: "#888" }}>
      작성시각: {formatted}
    </span>
  );
};

export default CustomDate;
