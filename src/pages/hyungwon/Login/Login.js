import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputValue;

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isValidEmail = email.includes('@');
  const isNotValidEmail = email.includes('!');
  const isValidPwd = password.length >= 5;

  const getIsActive = isValidEmail && isValidPwd && !isNotValidEmail;

  const handleBtnValid = () => {
    if (isValidPwd && isValidEmail && !isNotValidEmail) {
      navigate('/main-hyungwon');
    } else {
      alert('이메일 및 비밀번호를 확인하세요');
    }
  };

  return (
    <div className="westagram">
      <div className="westagram-top">
        <button type="button" className="language">
          한국어
        </button>
        <p className="title">westagram</p>
        <button
          className="facebook"
          onClick={() => {
            alert('There is no Facebook');
          }}
        >
          Facebook으로 계속하기
        </button>
        <div className="or">
          <div className="or_left" />
          <p className="p_or">또는</p>
          <div className="or_right" />
        </div>
        <div className="input_info">
          <form className="info" id="info">
            <input
              type="text"
              name="email"
              onChange={handleInput}
              className="input_id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              name="password"
              onChange={handleInput}
              className="input_password"
              placeholder="비밀번호"
            />
          </form>
          <a
            className="forgot_password"
            href="/"
            onClick={e => {
              e.preventDefault();
            }}
          >
            비밀번호를 잊으셨나요?
          </a>
          <button
            className={
              getIsActive ? 'loginButtonAction' : 'loginButtonInaction'
            }
            onClick={handleBtnValid}
          >
            로그인
          </button>
        </div>
        <p className="signin">
          {' '}
          계정이 없으신가요?{' '}
          <a
            className="sign"
            href="/"
            onClick={e => {
              e.preventDefault();
            }}
          >
            가입하기
          </a>
        </p>
      </div>
      <div className="westagram-bottom">
        <img
          src="/images/hyungwon/meta.png"
          alt="meta"
          className="bottonlogo"
        />
        <p>Meta</p>
      </div>
    </div>
  );
};

export default Login;
