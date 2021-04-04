import React from 'react';
import { useSelector } from 'react-redux';
import { useWindowSize } from 'react-use-size';
import { Redirect } from 'react-router-dom';

import Container from '../../components/Container';
import TransactionContainer from '../../components/TransactionContainer/TransactionContainer';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import BalanceCustom from '../../components/BalanceCustom/BalanceCustom';
import GoToReport from '../../components/GoToReport/GoToReport';
import operation from '../../redux/selectors/transactionsSelectors';
import style from './HomeView.module.scss';
import CustomCalendar from '../../components/CustomCalendar/CustomCalendar';

const HomeView = () => {
  const costList = useSelector(operation.getAllransactions);
  const { width } = useWindowSize();

  return (
    <>
      {width > 767 && <Redirect to="/expense" />}
      <main className={style.main}>
        <Container>
          <div className={style.balanceWrap}>
            <BalanceCustom />
            <GoToReport />
            {/* <CustomCalendar /> */}
          </div>

          <TransactionContainer>
            <TransactionTable costList={costList} />
          </TransactionContainer>
        </Container>
      </main>
    </>
  );
};

export default HomeView;
