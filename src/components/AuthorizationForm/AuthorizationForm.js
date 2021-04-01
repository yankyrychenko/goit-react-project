import { useState } from 'react';
import { useDispatch } from 'react-redux';
// Styles
import styles from './AuthorizationForm.module.scss';
// Actions
import authActions from '../../redux/actions/authActions';
// Operations
import authOperations from '../../redux/operations/authOperations';
// Others
import GoogleLogin from 'react-google-login';
import sprite from '../../img/sprite.svg';

// const userTokenGoogle = new URLSearchParams(window.location.search).get(
//   'accessToken',
// );
// if (userTokenGoogle) {
//   localStoradge.save('accessTokenOlx', userTokenGoogle);
// }
// window.onload = function () {
//   userTokenGoogle && showMyCabinetBlock();
//   history.pushState(null, null, '/');
// };

const AuthorizationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
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

  const responseGoogle = response => {
    console.log(response);
    dispatch(authActions.setGoogleToken(response.tokenId));
    dispatch(authOperations.googleLogin());
  };

  // const match = useRouteMatch();
  // console.log(match);

  return (
    <form className={styles.AuthorizationForm} onSubmit={onSubmit}>
      <div className={styles.googleAuthBlock}>
        <p className={styles.googleAuthText}>
          Вы можете авторизоваться с помощью Google Account:
        </p>
        <GoogleLogin
          clientId="583292785321-9t25g2ougnpqqsqvstkg6vimei42aafe.apps.googleusercontent.com"
          render={renderProps => (
            <button
              className={styles.googleAuthButton}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <svg width="18" height="18">
                <use href={sprite + '#icon-google-symbol-1'}></use>
              </svg>
              Google
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <a href="https://kapusta-backend.goit.global/auth/google">Google</a>
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
          <input
            type="password"
            name="password"
            id="AuthorizationForm__password"
            value={password}
            onChange={changePasswordValue}
            placeholder="Пароль"
            // minLength="4"
            // maxLength="16"
            // required
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
  );
};

export default AuthorizationForm;
