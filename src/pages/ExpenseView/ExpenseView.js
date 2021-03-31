import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import expenseOperations from '../../redux/operations/expenseOperations';
import PagesCost from './../../components/PagesCost/CostPage'

export default function ExpenseView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseOperations.handleExpenseGet());
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
