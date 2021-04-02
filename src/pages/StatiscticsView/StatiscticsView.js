import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackHomeButton from '../../components/BackHomeButton/BackHomeButton';
import Stats from '../../components/Stats/Sats';
import Container from '../../components/Container';
import StatementBar from '../../components/StatementBar/StatementBar';
import periodDataOperations from '../../redux/operations/periodDataOperations';
import MonthCalendar from '../../components/MonthCalendar/MonthCalendar';

import ReportExpenseIncomeToggler from '../../components/ReportExpenseIncomeToggler/ReportExpenseIncomeToggler';

export default function StatisticsView() {
  /*   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(periodDataOperations.getPeriodData());
  }, [dispatch]); */

  const periodData = useSelector(state => state.periodData);

  return (
    <main>
      {/*  <section>
        <Container>
          <StatementBar />
        </Container>
      </section> */}
      <section>
        <Container>
          <BackHomeButton />
          <MonthCalendar />
          <ReportExpenseIncomeToggler />
          {/* <Stats /> */}
        </Container>
      </section>
    </main>
  );
}
