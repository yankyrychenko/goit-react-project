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

  const changeEmailValue = event => setEmail(event.target.value);
  const changePasswordValue = event => setPassword(event.target.value);

  const onSubmit = event => {
    event.preventDefault();

    if (event.nativeEvent.submitter.textContent === 'Войти') {
      console.log('Запрос для логина');
    }
    if (event.nativeEvent.submitter.textContent === 'Регистрация') {
      console.log('Запрос для регистрации');
    }
  };

  return (
    <Container>
      <form className={styles.AuthorizationForm} onSubmit={onSubmit}>
        <div className={styles.googleAuthBlock}>
          <p className={styles.googleAuthText}>
            Вы можете авторизоваться с помощью Google Account:
          </p>
          <Link className={styles.googleAuthButton}>
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
              minLength="4"
              required
            />
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
