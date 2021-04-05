import api from '../../services/kapusta-api';
import authActions from '../actions/authActions';

const handleLogIn = credentials => dispatch => {
  dispatch(authActions.logInRequest());

  api
    .logIn(credentials)
    .then(({ data }) => {
      // data = { accessToken, refreshToken, sid, userData: { balance, email, id, transactions } }
      api.token.set(data.accessToken);
      dispatch(authActions.logInSuccess(data));
    })
    .catch(error => dispatch(authActions.logInError(error.message)));
};

const handleSignUp = credentials => dispatch => {
  dispatch(authActions.signUpRequest());

  api
    .signUp(credentials)
    .then(({ data }) => {
      // data = { email, id }
      dispatch(authActions.signUpSuccess(data));

      // Сразу после регистрации делаю запрос на логинизацию
      handleLogIn(credentials)(dispatch);
    })
    .catch(error => dispatch(authActions.signUpError(error.message)));
};

const handleLogOut = () => dispatch => {
  dispatch(authActions.logOutRequest());

  api
    .logOut()
    .then(() => {
      api.token.unset();
      dispatch(authActions.logOutSuccess());
    })
    .catch(error => dispatch(authActions.logOutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();
  if (token) {
    api.token.set(token);

    dispatch(authActions.getCurrentUserRequest());

    api
      .userDataGet()
      .then(({ data }) => {
        // data = { balance, email, transactions }
        dispatch(authActions.getCurrentUserSuccess(data));
      })
      .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
  }
};

// eslint-disable-next-line
export default {
  handleSignUp,
  handleLogIn,
  handleLogOut,
  getCurrentUser,
};
