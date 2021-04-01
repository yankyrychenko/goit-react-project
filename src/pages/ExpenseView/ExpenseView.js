import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
// import PagesCost from './../../components/PagesCost/CostPage';
import transactionsOperations from '../../redux/operations/transactionsOperations';
import categoriesOperations from '../../redux/operations/categoriesOperations';

export default function ExpenseView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.handleExpenseGet());
    dispatch(categoriesOperations.handleExpenseCategGet());
  }, [dispatch]);

  return (
    <main>
      <Container>
        {/* <PagesCost /> */}
      </Container>
    </main>
  );
}
