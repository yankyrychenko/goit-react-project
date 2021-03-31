import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import BalanceForm from './components/BalanceForm/BalanceForm';
import Container from './components/Container/Container';
// Components
import Header from './components/Header/Header';
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
  return (
    <>
      <Container>
        {/* <Header />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={AuthorizationView} />
          <Route exact path={routes.expense} component={ExpenseView} />
          <Route exact path={routes.income} component={IncomeView} />
          <Route exact path={routes.stats} component={StatisticsView} />
        </Switch>
      </Suspense> */}

        <BalanceForm />
      </Container>
    </>
  );
}
