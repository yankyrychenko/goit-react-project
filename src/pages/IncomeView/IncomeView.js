import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import incomeOperations from '../../redux/operations/incomeOperations';
import PagesCost from './../../components/PagesCost/CostPage'

export default function IncomeView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(incomeOperations.handleIncomeGet());
  }, [dispatch]);

  return (
    <>
      <main>
        <Container>
          <PagesCost/>
        </Container>
      </main>
    </>
  );
}
