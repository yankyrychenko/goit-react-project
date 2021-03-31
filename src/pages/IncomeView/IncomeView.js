import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import PagesCost from './../../components/PagesCost/CostPage';
import incomeOperations from '../../redux/operations/incomeOperations';
import categoriesOperations from '../../redux/operations/categoriesOperations';

export default function IncomeView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(incomeOperations.handleIncomeGet());
    dispatch(categoriesOperations.handleIncomeCategGet());
  }, [dispatch]);

  return (
    <main>
      <Container>
        <PagesCost />
      </Container>
    </main>
  );
}
