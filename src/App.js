import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
// Operations
import authOperations from './redux/operations/authOperations';
// Others
import { routes } from './routes/routes';

const AuthorizationView = lazy(() =>
  import(
    './pages/AuthorizationView' /* webpackChunkName: "AuthorizationView" */
  ),
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, []);

  return (
    <>
      <Header />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={AuthorizationView} />
          <Route exact path={routes.expense} component={ExpenseView} />
          <Route exact path={routes.income} component={IncomeView} />
          <Route exact path={routes.stats} component={StatisticsView} />
        </Switch>
      </Suspense>
    </>
  );
}
