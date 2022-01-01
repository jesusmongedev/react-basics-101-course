import Avatar from "../Avatar";
import styles from "./styles.module.css";

const UserInfo = ({ user }) => {
  return (
    <div>
      <Avatar user={user} />
      <div>
        <h1 className={styles.userName}>{user.name}</h1>
      </div>
    </div>
  );
};

export default UserInfo;
