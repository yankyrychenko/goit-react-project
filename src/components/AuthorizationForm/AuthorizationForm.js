import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Styles
import styles from './AuthorizationForm.module.scss';
// Operations
import authOperations from '../../redux/operations/authOperations';
// Others
import sprite from '../../img/sprite.svg';

const AuthorizationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  const changeEmailValue = event => setEmail(event.target.value);
  const changePasswordValue = event => setPassword(event.target.value);

  const onSubmit = event => {
    event.preventDefault();

    !validateEmail(email)
      ? setEmailError('Некорректно введен e-mail.')
      : setEmailError('');

    !validatePassword(password)
      ? setPasswordError('Пароль должен быть от 4 до 16 символов.')
      : setPasswordError('');

    !email && setEmailError('это обязательное поле');
    !password && setPasswordError('это обязательное поле');

    if (validateEmail(email) && validatePassword(password)) {
      if (event.nativeEvent.submitter.textContent === 'Войти') {
        dispatch(authOperations.handleLogIn({ email, password }));
      }
      if (event.nativeEvent.submitter.textContent === 'Регистрация') {
        dispatch(authOperations.handleSignUp({ email, password }));
      }
      formReset();
    }
  };

  const validateEmail = email => {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePassword = password => {
    return Boolean(password.length >= 4 && password.length <= 16);
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  const errorMessage = () => {
    if (error === 'Request failed with status code 409') {
      return 'Пользователь с таким email уже зарегистрирован';
    } else if (error === 'Request failed with status code 403') {
      return 'Некорректный пароль или email';
    } else {
      return 'Ошибка! Попробуйте еще раз';
    }
  };

  return (
    <form className={styles.AuthorizationForm} onSubmit={onSubmit}>
      <div className={styles.googleAuthBlock}>
        <p className={styles.googleAuthText}>
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <a
          href="https://kapusta-backend.goit.global/auth/google"
          className={styles.googleAuthButton}
        >
          <svg width="18" height="18">
            <use href={sprite + '#icon-google-symbol-1'}></use>
          </svg>
          Google
        </a>
      </div>
      <div className={styles.authBlock}>
        <p className={styles.authText}>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <div className={styles.emailBlock}>
          <label htmlFor="AuthorizationForm__email">
            {emailError && <span style={{ color: 'red' }}>*</span>}
            Электронная почта:
          </label>
          <input
            type="email"
            name="email"
            id="AuthorizationForm__email"
            value={email}
            onChange={changeEmailValue}
            placeholder="your@email.com"
            // required
          />
          <p className={styles.emailError}>{emailError}</p>
        </div>
        <div className={styles.passwordBlock}>
          <label htmlFor="AuthorizationForm__password">
            {passwordError && <span style={{ color: 'red' }}>*</span>}
            Пароль:
          </label>
          <div className={styles.passwordInputBlock}>
            <input
              type={isPasswordShown ? 'text' : 'password'}
              name="password"
              id="AuthorizationForm__password"
              value={password}
              onChange={changePasswordValue}
              placeholder="Пароль"
              // minLength="4"
              // maxLength="16"
              // required
            />
            <button
              type="button"
              className={styles.passwordButton}
              onClick={() => setIsPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown ? 'Скрыть' : 'Показать'} пароль
            </button>
          </div>
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
      <p className={styles.formError}>{error && errorMessage()}</p>
    </form>
  );
};

export default AuthorizationForm;
