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
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <main>
      {/* <StatementBar /> */}
      <Container>
        <div className={style.balanceWrap}>
          <BackHomeButton />
          <BalanceCustom />
          <MonthCalendar setActiveCategory={setActiveCategory}/>
        </div>

        {/*  <div className={style.wrapper}>
          <StatementBar />
        </div> */}

        <div className={style.wrapper}>
          <ReportExpenseIncomeToggler activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>

         <div className={style.wrapper}>
          {activeCategory && <Stats category={activeCategory} />}
        </div>
      </Container>
    </main>
  );
}
