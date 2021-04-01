import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Stats from '../../components/Stats/Sats';
import Container from '../../components/Container';
import StatementBar from '../../components/StatementBar/StatementBar';
import periodDataOperations from '../../redux/operations/periodDataOperations';
import MonthCalendar from '../../components/MonthCalendar/MonthCalendar';

export default function StatisticsView() {
  /*   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(periodDataOperations.getPeriodData());
  }, [dispatch]); */

  return (
    <main>
      {/*  <section>
        <Container>
          <StatementBar />
        </Container>
      </section> */}

      <section>
        <Container>
          <MonthCalendar />
          <Stats />
        </Container>
      </section>
    </main>
  );
}
