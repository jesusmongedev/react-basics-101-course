import UserInfo from "../UserInfo";

const Comment = ({ date, text, author }) => {
  const formatDate = () => date.toLocaleDateString();
  return (
    <div className="comment">
      <UserInfo user={author} />
      <div>{text}</div>
      <div className="comment-date">{formatDate(date)}</div>
    </div>
  );
};

export default Comment;
