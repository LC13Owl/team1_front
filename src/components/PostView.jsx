import React, { useState, useEffect } from "react";

function View() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const savedViews = Number(localStorage.getItem("views") || 0);
    const newViews = savedViews + 1;
    setViews(newViews);
    localStorage.setItem("views", newViews.toString());
  }, []);

  return <span> 조회수: {views}</span>;
}

export default View;
