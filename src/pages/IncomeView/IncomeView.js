import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';
import PagesCost from './../../components/PagesCost/CostPage';
import transactionsOperations from '../../redux/operations/transactionsOperations';
import categoriesOperations from '../../redux/operations/categoriesOperations';
import BalanceForm from '../../components/BalanceForm/BalanceForm';
import { getCategoryIncome } from '../../redux/selectors/categoriesSelectors';

export default function IncomeView() {
  const dispatch = useDispatch();
  const category = useSelector(getCategoryIncome);

  useEffect(() => {
    dispatch(transactionsOperations.handleIncomeGet());
    dispatch(categoriesOperations.handleIncomeCategGet());
  }, [dispatch]);

  const submitIncomeData = data => {
    const finalData = { ...data, amount: Number(data.amount) };
    dispatch(transactionsOperations.handleIncomePost(finalData));
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
