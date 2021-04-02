import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackHomeButton from '../../components/BackHomeButton/BackHomeButton';
import Stats from '../../components/Stats/Sats';
import Container from '../../components/Container';
import StatementBar from '../../components/StatementBar/StatementBar';
import periodDataOperations from '../../redux/operations/periodDataOperations';
import MonthCalendar from '../../components/MonthCalendar/MonthCalendar';

import ReportExpense from '../../components/ReportExpense/ReportExpense';
import ReportIncome from '../../components/ReportIncome/ReportIncome';

export default function StatisticsView() {
  /*   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(periodDataOperations.getPeriodData());
  }, [dispatch]); */

  const periodData = useSelector(state => state.periodData);
  const [activeCategory, setActiveCategory] = useState('');

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
          <MonthCalendar setActiveCategory={setActiveCategory} />
          {periodData && <ReportExpense activeCategory={activeCategory} setActiveCategory={setActiveCategory} />}
          {periodData && <ReportIncome activeCategory={activeCategory} setActiveCategory={setActiveCategory} />}
          {activeCategory && <Stats category={activeCategory} />}
        </Container>
      </section>
    </main>
  );
}
