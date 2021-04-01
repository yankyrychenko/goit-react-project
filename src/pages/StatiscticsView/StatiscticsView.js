import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Stats from '../../components/Stats/Sats';
import Container from '../../components/Container';
import periodDataOperations from '../../redux/operations/periodDataOperations';

export default function StatisticsView() {
  /*   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(periodDataOperations.getPeriodData());
  }, [dispatch]); */

  return (
    <main>
      <Container>
        <Stats />
      </Container>
    </main>
  );
}
