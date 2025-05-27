import React, { useEffect, useState } from "react";

function View() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const saved = parseInt(localStorage.getItem("views") || "0", 10);
    const next = saved + 1;
    localStorage.setItem("views", String(next));
    setViews(next);
  }, []);

  return (
    <span style={{ fontSize: "0.9rem", color: "#888" }}>조회수: {views}</span>
  );
}

export default View;
