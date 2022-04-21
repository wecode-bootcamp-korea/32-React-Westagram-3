import AppDownload from './AppDownload';
import JoinWrap from './JoinWrap';
import './Login.scss';
import LoginWrap from './LoginWrap';

const Login = () => {
  const user = {
    id: 'userid@gmail.com',
    pw: 'pw123456789',
  };

  return (
    <section className="login">
      <article className="loginNjoin">
        <LoginWrap user={user} />
        <JoinWrap />
        <AppDownload />
      </article>
    </section>
  );
};

export default Login;
