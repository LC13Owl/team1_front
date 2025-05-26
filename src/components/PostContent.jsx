function PostContent({ text }) {
  return (
    <div
      style={{
        marginTop: "1rem",
        borderTop: "1px solid #ccc",
        paddingTop: "1rem",
      }}
    >
      <p>{text}</p>
    </div>
  );
}

export default PostContent;
