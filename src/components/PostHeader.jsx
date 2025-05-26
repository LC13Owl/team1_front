import React from "react";
import CustomDate from "./PostDate";

function PostHeader({ title, team, views, date, onAdd, onDelete, onEdit }) {
  return (
    <div
      className="post-header"
      style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}
    >
      <div style={{ fontWeight: "bold" }}>{team}</div>
      <h2>{title}</h2>
      <div style={{ color: "#777", marginBottom: "0.5rem" }}>
        <CustomDate />
        views={views}
        <span style={{ marginLeft: "10px" }}>{date}</span>
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={onAdd}>추가</button>
        <button onClick={onDelete}>삭제</button>
        <button onClick={onEdit}>수정</button>
      </div>
    </div>
  );
}

export default PostHeader;
