import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import expenseOperations from '../../redux/operations/expenseOperations';

export default function ExpenseView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseOperations.handleExpenseGet());
  }, [dispatch]);

  return (
    <>
      <main>
        <Container></Container>
      </main>
    </>
  );
}
