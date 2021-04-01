import React from 'react';
import Container from '../../components/Container';
import TransactionContainer from '../../components/TransactionContainer/TransactionContainer';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import BalanceCustom from '../../components/BalanceCustom/BalanceCustom';
import GoToReport from '../../components/GoToReport/GoToReport';

const HomeView = () => (
  <main>
    <Container>
      <BalanceCustom />
      <GoToReport />
    </Container>

    <Container>
      <TransactionContainer>
        <TransactionTable />
      </TransactionContainer>
    </Container>
  </main>
);

export default HomeView;
