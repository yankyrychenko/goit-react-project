import React from 'react';
// Components
import Container from './components/Container';
import Header from './components/Header/Header';
import AuthorizationForm from './components/AuthorizationForm/AuthorizationForm';
import Summary from './components/Summary/Summary';
import MonthArrows from './components/MonthArrows/MonthArrows';

export default function App() {
  return (
    <>
      <Header />
      <AuthorizationForm />
      <MonthArrows />
    </>
  );
}
