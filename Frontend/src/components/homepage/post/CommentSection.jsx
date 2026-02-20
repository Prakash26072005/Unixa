const CommentSection = ({ comments }) => {
  return (
    <div>
      {comments.map((c) => (
        <div key={c.id}>
          <strong>{c.username}</strong>
          <p>{c.comment_text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
