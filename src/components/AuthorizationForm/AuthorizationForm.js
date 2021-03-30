import { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import Container from '../Container/Container';
// Styles
import styles from './AuthorizationForm.module.scss';
// Others
import sprite from '../../img/sprite.svg';

const AuthorizationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const changeEmailValue = event => setEmail(event.target.value);
  const changePasswordValue = event => setPassword(event.target.value);

  const onSubmit = event => {
    event.preventDefault();

    console.log('email', validateEmail(email));
    console.log('password', validatePassword(password));

    if (!validateEmail(email)) {
      setEmailError('Некорректно введен e-mail.');
      return;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Пароль должен быть от 4 до 16 символов.');
      return;
    } else {
      setPasswordError('');
    }

    if (event.nativeEvent.submitter.textContent === 'Войти') {
      console.log('Запрос для логина');
    }
    if (event.nativeEvent.submitter.textContent === 'Регистрация') {
      console.log('Запрос для регистрации');
    }
  };

  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePassword = password =>
    Boolean(password.length >= 4 && password.length <= 16);

  return (
    <Container>
      <form className={styles.AuthorizationForm} onSubmit={onSubmit}>
        <div className={styles.googleAuthBlock}>
          <p className={styles.googleAuthText}>
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <Link to="" className={styles.googleAuthButton}>
            <svg width="18" height="18">
              <use href={sprite + '#icon-google-symbol-1'}></use>
            </svg>
            Google
          </Link>
        </div>
        <div className={styles.authBlock}>
          <p className={styles.authText}>
            Или зайти с помощью e-mail и пароля, предварительно
            зарегистрировавшись:
          </p>
          <div className={styles.emailBlock}>
            <label htmlFor="AuthorizationForm__email">Электронная почта:</label>
            <input
              type="email"
              name="email"
              id="AuthorizationForm__email"
              value={email}
              onChange={changeEmailValue}
              placeholder="your@email.com"
              required
            />
            <p className={styles.emailError}>{emailError}</p>
          </div>
          <div className={styles.passwordBlock}>
            <label htmlFor="AuthorizationForm__password">Пароль:</label>
            <input
              type="password"
              name="password"
              id="AuthorizationForm__password"
              value={password}
              onChange={changePasswordValue}
              placeholder="Пароль"
              // minLength="4"
              // maxLength="16"
              required
            />
            <p className={styles.passwordError}>{passwordError}</p>
          </div>
        </div>
        <div className={styles.buttonsBlock}>
          <button type="submit" className={styles.loginButton}>
            Войти
          </button>
          <button type="submit" className={styles.registrationButton}>
            Регистрация
          </button>
        </div>
      </form>
    </Container>
  );
};

export default AuthorizationForm;
