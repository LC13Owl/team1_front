import React from "react";
import CustomDate from "./PostDate";

function PostContent({ text, date, views }) {
  return (
    <div
      style={{
        //css 설정
        marginTop: "1rem",
        borderTop: "1px solid #ccc",
        paddingTop: "1rem",
      }}
    >
      <p>{text}</p>
      <div style={{ fontSize: "0.9rem", color: "#888", marginTop: "0.5rem" }}>
        <CustomDate date={date} />
      </div>
    </div>
  );
}

export default PostContent;
