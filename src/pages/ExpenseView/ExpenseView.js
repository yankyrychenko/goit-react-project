import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';
import PagesCost from './../../components/PagesCost/CostPage';
import transactionsOperations from '../../redux/operations/transactionsOperations';
import categoriesOperations from '../../redux/operations/categoriesOperations';
import BalanceForm from '../../components/BalanceForm/BalanceForm';
import { getCategoryExpense } from '../../redux/selectors/categoriesSelectors';

export default function ExpenseView() {
  const dispatch = useDispatch();
  const category = useSelector(getCategoryExpense);

  useEffect(() => {
    dispatch(transactionsOperations.handleExpenseGet());
    dispatch(categoriesOperations.handleExpenseCategGet());
  }, [dispatch]);

  const submitIncomeData = data => {
    const finalData = { ...data, amount: Number(data.amount) };
    dispatch(transactionsOperations.handleExpensePost(finalData));
  };

  return (
    <main>
      <Container>
        <BalanceForm category={category} submitIncomeData={submitIncomeData} />
        <PagesCost />
      </Container>
    </main>
  );
}
