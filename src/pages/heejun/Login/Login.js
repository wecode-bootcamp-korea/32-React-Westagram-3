import './Login.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = e => {
    e.preventDefault();

    fetch('http://10.58.2.64:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        name: '희준',
        contact: 'hi hi ! ',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('token', result.access_token);
          alert('로그인 성공!');
          navigate('/main-heejun');
        } else {
          alert('틀림');
        }
      });
  };

  const [email, setEamli] = useState('');
  const [password, setPassWord] = useState('');

  const [disabled, setDisabled] = useState(true);

  const handleIdInput = e => {
    setEamli(e.target.value);
  };
  const handlePasswordInput = e => {
    setPassWord(e.target.value);
  };

  const [isActive, setIsActive] = useState(false);

  const isPassedLogin = () => {
    email.includes('@') && password.length > 4
      ? setIsActive(true)
      : setIsActive(false);
    email.includes('@') && password.length > 4
      ? setDisabled(false)
      : setDisabled(true);
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
          onClick={goToMain}
          type="submit"
          className={isActive ? 'activeBtn' : 'unactiveBtn'}
          disabled={disabled}
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
