import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();

  const onClickButton = () => {
    fetch('http://10.58.6.73:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
    //navigate('../main-jeunbeom');
    //() =>{navigate('/main')}
  };
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const checkValidation = !(id.includes('@') && pw.length >= 5) ? true : false;

  const handleId = event => {
    setId(event.target.value);
  };

  const handlePw = event => {
    setPw(event.target.value);
  };

  return (
    <div>
      <body>
        <main className="main">
          <article className="article">
            <div>
              <h1 className="title">Westagram</h1>
              <form className="loginForm">
                <input
                  className="id"
                  type="text"
                  placeholder="전화번호, 시용자 이름 또는 이메일"
                  value={id}
                  onChange={handleId}
                />
                <input
                  className="password"
                  type="password"
                  placeholder="비밀번호"
                  value={pw}
                  onChange={handlePw}
                />
                <button
                  className="loginBtn"
                  type="button"
                  disabled={checkValidation}
                  onClick={onClickButton}
                >
                  로그인
                </button>
              </form>
              <div className="forgot">
                <span className="forgotPassword">비밀번호를 잊으셨나요?</span>
              </div>
            </div>
          </article>
        </main>
      </body>
    </div>
  );
}

export default Login;
