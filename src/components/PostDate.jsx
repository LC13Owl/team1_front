import React from "react";

const CustomDate = ({ date }) => {
  if (!date) return null;

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
