import React from 'react';
import GoToReport  from './components/GoToReport/GoToReport'
import Container from './components/Container';
import BalanceCustom from './components/BalanceCustom/BalanceCustom';
import BalanceModal from './components/BalanceModal/BalanceModal';

export default function App() {
  return (
    <>
      <Container>
        <GoToReport />
        <BalanceCustom />
        <BalanceModal/>
      </Container>
    </>
  );
}
