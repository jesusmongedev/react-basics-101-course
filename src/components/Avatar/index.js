const Avatar = ({ user: { avatarUrl, name } }) => {
  return <img className="avatar" src={avatarUrl} alt={name} />;
};

export default Avatar;
