import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const user = {
    id: 'userid@gmail.com',
    pw: 'pw123456789',
  };

  const [state, setState] = useState({ id: '', pw: '' });

  const onLogin = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const goToMain = e => {
    e.preventDefault();
    const idCheck = state.id === user.id;
    const pwCheck = state.pw === user.pw;
    const includeEmail = state.id.includes('@');
    const pwMinLength = 7 < state.pw.length && state.pw.length < 16;

    if (idCheck && pwCheck) {
      navigate('/main');
    } else {
      let errorMessage = '';
      let hintMessage = '';

      if (!idCheck && !pwCheck) {
        errorMessage += `아이디와 비밀번호를 확인하세요`;
      } else if (!idCheck) {
        errorMessage += `아이디를 확인하세요`;
      } else if (!pwCheck) {
        errorMessage += `비밀번호를 확인하세요`;
      }

      if (!includeEmail) {
        hintMessage += `아이디가 이메일 형식이 아닙니다.\n`;
      }
      if (!pwMinLength) {
        hintMessage += `비밀번호는 8자리 ~ 15자리 입니다.\n`;
      }

      alert(`${errorMessage}!${hintMessage ? '\n\nhint:' : ''}${hintMessage}`);
    }
  };
  return (
    <section className="login_page">
      <article className="loginNjoin">
        <div className="login">
          <h1 className="logo">westargram</h1>
          <form className="login_form">
            <div className="input_wrap">
              <input
                className="login_id"
                name="id"
                type="text"
                placeholder="아이디"
                autoComplete="off"
                onInput={onLogin}
              />
              <input
                className="login_pw"
                name="pw"
                type="password"
                placeholder="비밀번호"
                autoComplete="off"
                onInput={onLogin}
              />
            </div>
            <button
              className="submit_btn"
              type="submit"
              onClick={goToMain}
              disabled={!(state.id && state.pw)}
            >
              로그인
            </button>
          </form>
          <div className="or">
            <div className="line" />
            <span>또는</span>
            <div className="line" />
          </div>
          <Link className="facebook" to="#">
            Facebook으로 로그인
          </Link>
          <Link className="forget" to="#">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <div className="join">
          계정이 없으신가요 ? <Link to="#">가입하기</Link>
        </div>
        <div className="app_download">
          <span>앱을 다운로드하세요.</span>
          <div className="appBtn_wrap">
            <button type="button" className="appstrore">
              앱스토어 다운로드
            </button>
            <button type="button" className="googleplay">
              구글플레이 다운로드
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Login;
