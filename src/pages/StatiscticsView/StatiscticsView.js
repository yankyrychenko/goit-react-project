import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackHomeButton from '../../components/BackHomeButton/BackHomeButton';
import Stats from '../../components/Stats/Sats';
import Container from '../../components/Container';
import BalanceCustom from '../../components/BalanceCustom/BalanceCustom';
import GoToReport from '../../components/GoToReport/GoToReport';
import StatementBar from '../../components/StatementBar/StatementBar';
import periodDataOperations from '../../redux/operations/periodDataOperations';
import MonthCalendar from '../../components/MonthCalendar/MonthCalendar';
import ReportExpenseIncomeToggler from '../../components/ReportExpenseIncomeToggler/ReportExpenseIncomeToggler';
import style from './StatiscticsView.module.scss';

export default function StatisticsView() {
  /*   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(periodDataOperations.getPeriodData());
  }, [dispatch]); */

  const periodData = useSelector(state => state.periodData);

  return (
    <main className={style.main}>
      {/* <StatementBar /> */}
      <Container>
        <div className={style.barWrapper}>
          <BackHomeButton />
          <div className={style.balanceWrap}>
            <BalanceCustom />
            <MonthCalendar />
          </div>
        </div>

        <div className={style.wrapper}>
          <StatementBar />
        </div>

        <div className={style.wrapper}>
          {periodData?.expenses && <ReportExpenseIncomeToggler />}
        </div>

        <div className={style.wrapper}>
          <Stats />
        </div>
      </Container>
    </main>
  );
}
