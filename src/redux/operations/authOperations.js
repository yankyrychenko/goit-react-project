import authActions from '../actions/authActions';
import api from '../../services/kapusta-api';

const handleSignUp = credentials => dispatch => {
  dispatch(authActions.signUpRequest());

  api
    .signUp(credentials)
    .then(({ data }) => {
      console.dir(data); // data = { email, id } //! почему нету токена надо узнать
      api.token.set(data.token);
      dispatch(authActions.signUpSuccess(data));
    })
    .catch(error => dispatch(authActions.signUpError(error.message)));
};

const handleLogIn = credentials => dispatch => {
  dispatch(authActions.logInRequest());

  api
    .logIn(credentials)
    .then(({ data }) => {
      console.dir(data); // data = { accessToken, refreshToken, sid, userData: { balance, email, id, transactions } }
      api.token.set(data.accessToken);
      dispatch(authActions.logInSuccess(data));
    })
    .catch(error => dispatch(authActions.logInError(error.message)));
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
// eslint-disable-next-line
export default { handleSignUp, handleLogIn, handleLogOut };
