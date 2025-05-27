import React from "react";
import CustomDate from "./PostDate";
import "./PostHeader.css";
import View from "./PostView";

function PostHeader({ title, team, views, date, onAdd, onDelete, onEdit }) {
  return (
    <div className="post-header">
      <div className="team">{team}</div>
      <h2>{title}</h2>
      <div className="meta">
        <CustomDate date={date} />
        <View />
      </div>
      <div className="buttons">
        <button onClick={onAdd}>작성</button>
        <button onClick={onDelete}>삭제</button>
        <button onClick={onEdit}>수정</button>
      </div>
    </div>
  );
}

export default PostHeader;
