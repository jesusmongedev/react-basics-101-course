import Avatar from "../Avatar";

const UserInfo = ({ user }) => {
  return (
    <div className="userInfo">
      <Avatar user={user} />
      <div className="userInfo-name">
        <h1>{user.name}</h1>
      </div>
    </div>
  );
};

export default UserInfo;
