import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Stats from '../../components/Stats/Sats';
import Container from '../../components/Container';
import periodDataOperations from '../../redux/operations/periodDataOperations';
import MonthCalendar from '../../components/MonthCalendar/MonthCalendar';

export default function StatisticsView() {
  /*   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(periodDataOperations.getPeriodData());
  }, [dispatch]); */

  return (
    <main>
      <Container>
        <MonthCalendar />

        <Stats />
      </Container>
    </main>
  );
}
