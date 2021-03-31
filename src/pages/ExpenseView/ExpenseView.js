import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import PagesCost from './../../components/PagesCost/CostPage';
import expenseOperations from '../../redux/operations/expenseOperations';
import categoriesOperations from '../../redux/operations/categoriesOperations';

export default function ExpenseView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseOperations.handleExpenseGet());
    dispatch(categoriesOperations.handleExpenseCategGet());
  }, [dispatch]);

  return (
    <main>
      <Container>
        <PagesCost />
      </Container>
    </main>
  );
}
