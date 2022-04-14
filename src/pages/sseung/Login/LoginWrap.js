import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginWrap = ({ user }) => {
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
      navigate('/main-sseung');
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
    <div className="loginWrap">
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
  );
};

export default LoginWrap;
