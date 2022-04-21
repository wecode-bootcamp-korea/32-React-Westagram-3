import UserProfile from './components/UserProfile';
import Users from './users';

const MainRight = ({ userData, recommendData }) => {
  return (
    <section className="main_right">
      <article className="myInfo">
        <UserProfile userData={userData} btnText="전환" />
      </article>
      <article className="recommend">
        <p>
          <span>회원님을 위한 추천</span>
          <button href="#">모두 보기</button>
        </p>
        <Users
          recommendData={recommendData}
          btnClass="follow_btn link_blue"
          btnText="팔로우"
        />
      </article>
    </section>
  );
};

export default MainRight;
