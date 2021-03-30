import { useState } from 'react';
// Components
import Container from '../Container/Container';

const AuthorizationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmailValue = event => setEmail(event.target.value);
  const changePasswordValue = event => setPassword(event.target.value);

  // const onSubmit = event => {
  //   event.preventDefault();
  // };

  const onLogin = event => {
    console.log(event.target);
  };

  const onRegistration = event => {
    console.log(event.target);
  };

  return (
    <Container>
      <form className="AuthorizationForm" /*onSubmit={onSubmit}*/>
        <p>Вы можете авторизоваться с помощью Google Account:</p>
        <button type="button">Google</button>
        <p>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <label htmlFor="AuthorizationForm__email">Электронная почта:</label>
        <input
          type="email"
          name="email"
          id="AuthorizationForm__email"
          value={email}
          onChange={changeEmailValue}
          required
        />
        <label htmlFor="AuthorizationForm__password">Пароль:</label>
        <input
          type="password"
          name="password"
          id="AuthorizationForm__password"
          value={password}
          onChange={changePasswordValue}
          required
        />
        <button type="button" className="login-button" onClick={onLogin}>
          Войти
        </button>
        <button
          type="button"
          className="registration-button"
          onClick={onRegistration}
        >
          Регистрация
        </button>
        {/* <button type="submit" className="login-button">
        Войти
      </button>
      <button type="submit" className="registration-button">
        Регистрация
      </button> */}
      </form>
    </Container>
  );
};

export default AuthorizationForm;
