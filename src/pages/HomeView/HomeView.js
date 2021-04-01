import React from 'react';
import Container from '../../components/Container';
import TransactionContainer from '../../components/TransactionContainer/TransactionContainer'


const HomeView = () => (
  <>
    <main>
      <Container>
        <TransactionContainer></TransactionContainer>
      </Container>
    </main>
  </>
);

export default HomeView;
