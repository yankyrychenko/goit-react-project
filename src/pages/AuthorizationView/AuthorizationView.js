import React from 'react';
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';
import AuthorizationForm from '../../components/AuthorizationForm/AuthorizationForm';
import styles from './AuthorizationView.module.scss';

const AuthorizationView = () => (
  <main className={styles.main}>
    <Container>
      <div className={styles.authContainer}>
        <PageTitle />
        <AuthorizationForm />
      </div>
    </Container>
  </main>
);

export default AuthorizationView;
