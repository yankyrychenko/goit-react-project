import React from 'react';
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';
import AuthorizationForm from '../../components/AuthorizationForm/AuthorizationForm';
import styles from './AuthorizationView.module.scss';
import Modal from '../../components/Modal/Modal';

const AuthorizationView = () => (
  <main>
    <Container>
      <div className={styles.authContainer}>
        <PageTitle />
        <Modal>
          <AuthorizationForm />
        </Modal>
      </div>
    </Container>
  </main>
);

export default AuthorizationView;
