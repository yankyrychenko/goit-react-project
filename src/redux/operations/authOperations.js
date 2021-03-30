import authActions from '../actions/authActions';
import { token, signUp, logIn, logOut } from '../../services/kapusta-api';

const handleSignUp = credentials => dispatch => {
  dispatch(authActions.signUpRequest());

  signUp(credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.signUpSuccess(data));
    })
    .catch(error => dispatch(authActions.signUpError(error.message)));
};

const handleLogIn = credentials => dispatch => {
  dispatch(authActions.logInRequest());

  logIn(credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.signUpSuccess(data));
    })
    .catch(error => dispatch(authActions.signUpError(error.message)));
};

const handleLogOut = () => dispatch => {
  dispatch(authActions.logOutRequest());

  logOut
    .then(() => {
      token.unset();
      dispatch(authActions.logOutSuccess());
    })
    .catch(error => dispatch(authActions.logOutError(error.message)));
};

export default { handleSignUp, handleLogIn, handleLogOut };
