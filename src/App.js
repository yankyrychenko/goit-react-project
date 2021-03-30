import React from 'react';
// Components
import Container from './components/Container';
import Header from './components/Header/Header';
import AuthorizationForm from './components/AuthorizationForm/AuthorizationForm';

export default function App() {
  return (
    <>
      <Header />
      <AuthorizationForm />
    </>
  );
}
