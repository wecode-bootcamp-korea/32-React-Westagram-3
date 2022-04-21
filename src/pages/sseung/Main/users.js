import UserProfile from './components/UserProfile';

const Users = ({ recommendData }) => {
  return (
    <ul className="users">
      {recommendData.map((item, index) => (
        <li key={index} className="user">
          <UserProfile
            userData={item}
            btnClass="follow_btn link_blue"
            btnText="팔로우"
          />
        </li>
      ))}
    </ul>
  );
};

export default Users;
