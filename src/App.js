import React from 'react';
// Components
import Container from './components/Container';
import Header from './components/Header/Header';
import AuthorizationForm from './components/AuthorizationForm/AuthorizationForm';
import BalanceForm from './components/BalanceForm';

export default function App() {
  return (
    <>
      <Container>
        {/* <Header />
      <AuthorizationForm /> */}
        <BalanceForm />
      </Container>
    </>
  );
}
