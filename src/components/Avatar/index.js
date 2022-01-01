import styles from "./styles.module.css";

const Avatar = ({ user: { avatarUrl, name } }) => {
  return <img className={styles.avatar} src={avatarUrl} alt={name} />;
};

export default Avatar;
