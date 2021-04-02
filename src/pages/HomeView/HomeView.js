import React from 'react';
import Container from '../../components/Container';
import TransactionContainer from '../../components/TransactionContainer/TransactionContainer';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import BalanceCustom from '../../components/BalanceCustom/BalanceCustom';
import GoToReport from '../../components/GoToReport/GoToReport';
import style from './HomeView.module.scss';

const HomeView = () => (
  <main>
    <Container>
      <div className={style.balanceWrap}>
        <BalanceCustom />
        <GoToReport />
      </div>

      <TransactionContainer>
        <TransactionTable />
      </TransactionContainer>
    </Container>
  </main>
);

export default HomeView;
