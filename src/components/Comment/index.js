import UserInfo from "../UserInfo";
import styles from "./styles.module.css";

const Comment = ({ date, text, author }) => {
  const formatDate = () => date.toLocaleDateString();
  return (
    <div className={styles.comment}>
      <UserInfo user={author} />
      <div>{text}</div>
      <div className={styles.commentDate}>{formatDate(date)}</div>
    </div>
  );
};

export default Comment;
