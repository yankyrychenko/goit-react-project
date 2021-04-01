import React from 'react';
import Container from '../../components/Container';
import AuthorizationForm from '../../components/AuthorizationForm/AuthorizationForm';
import Modal from '../../components/Modal/Modal';

const AuthorizationView = () => (
  <main>
    <Container>
      <Modal>
        <AuthorizationForm />
      </Modal>
    </Container>
  </main>
);

export default AuthorizationView;
