import React from 'react';
import Container from '../../components/Container';
import TransactionContainer from '../../components/TransactionContainer/TransactionContainer'
import TransactionTable from '../../components/TransactionTable/TransactionTable';


const HomeView = () => (
  <>
    <main>
      <Container>
        <TransactionContainer>
          <TransactionTable/>
        </TransactionContainer>
      </Container>
    </main>
  </>
);

export default HomeView;
