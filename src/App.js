import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import { routes, PublicRoute, PrivateRoute } from './routes';
import * as authSelectors from './redux/selectors/authSelectors';
import authOperations from './redux/operations/authOperations';
import authActions from './redux/actions/authActions';
import ChatBot from './components/ChatBot/Chat';

const AuthorizationView = lazy(() =>
  import(
    './pages/AuthorizationView' /* webpackChunkName: "AuthorizationView" */
  ),
);
const HomeView = lazy(() =>
  import('./pages/HomeView' /* webpackChunkName: "HomeView" */),
);
const ExpenseView = lazy(() =>
  import('./pages/ExpenseView' /* webpackChunkName: "ExpenseView" */),
);
const IncomeView = lazy(() =>
  import('./pages/IncomeView' /* webpackChunkName: "IncomeView" */),
);
const StatisticsView = lazy(() =>
  import('./pages/StatiscticsView' /* webpackChunkName: "StatisticsView" */),
);

export default function App() {
  const userEmail = useSelector(authSelectors.getUserEmail);
  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // При логинизации через Google в момент маунта App (componentDidMount) в адресной строке есть токен пользователя.
    // 1. Вытаскиваем токен пользователя из адресной строки и записываем его в переменную googleUserToken.
    const googleUserToken = new URLSearchParams(location.search).get(
      'accessToken',
    );

    // 2. Если googleUserToken есть, то записываем его в наш Redux Store в свойсво token.
    googleUserToken && dispatch(authActions.setGoogleToken(googleUserToken));

    // 3. Если токен есть, а почты пользователя (user.email) нет, то делаем запрос на бекенд на получение текущего пользователя.
    // Проверка на токен и почту нужна, что б не делать лишние запросы на бекенд уже после логина пользователя.
    if (token && !userEmail) {
      dispatch(authOperations.getCurrentUser());
    }
    //* Комментарии не удаляйте, на будущее будет полезно что б понимать, что тут происходит.
  }, [dispatch, location, token, userEmail]);

  return (
    <>
      <Header />
<ChatBot/>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <PublicRoute path={routes.auth} restricted redirectTo={routes.home}>
            <AuthorizationView />
          </PublicRoute>

          <PrivateRoute exact path={routes.home} redirectTo={routes.auth}>
            <HomeView />
          </PrivateRoute>

          <PrivateRoute path={routes.expense} redirectTo={routes.auth}>
            <ExpenseView />
          </PrivateRoute>

          <PrivateRoute path={routes.income} redirectTo={routes.auth}>
            <IncomeView />
          </PrivateRoute>

          <PrivateRoute path={routes.stats} redirectTo={routes.auth}>
            <StatisticsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}
