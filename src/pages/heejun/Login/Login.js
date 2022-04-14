import './Login.scss';
import React, { useState } from 'react';

const Login = () => {
  // 이메일 , 비밀번호 저장
  const [email, setEamli] = useState('');
  const [password, setPassWord] = useState('');

  const handleIdInput = e => {
    setEamli(e.target.value);
  };
  const handlePasswordInput = e => {
    setPassWord(e.target.value);
  };

  // 아이디 비밀번호 검증 조건

  const [isActive, setIsActive] = useState(false);

  const isPassedLogin = () => {
    return email.includes('@') && password.length > 4
      ? setIsActive(true)
      : setIsActive(false);
  };

  return (
    <div className="Login">
      <header className="headerLogo">
        <span className="logo">Westagram</span>
      </header>
      <form className="loginFormWrap">
        <input
          onChange={handleIdInput}
          onKeyUp={isPassedLogin}
          className="idInput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={handlePasswordInput}
          onKeyUp={isPassedLogin}
          className="passwordInput"
          type="password"
          placeholder="비밀번호"
        />

        <button
          type="button"
          className={isActive ? 'activeBtn' : 'unactiveBtn'}
          disabled
        >
          로그인
        </button>
      </form>
      <footer className="passwordFindWrap">
        <span className="passwordFind">비밀번호를 잊으셨나요 ?</span>
      </footer>
    </div>
  );
};

export default Login;
