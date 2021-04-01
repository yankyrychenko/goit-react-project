import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';
import TransactionContainer from '../../components/TransactionContainer/TransactionContainer';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import Summary from '../../components/Summary/Summary';
import transactionsOperations from '../../redux/operations/transactionsOperations';
import categoriesOperations from '../../redux/operations/categoriesOperations';
import BalanceForm from '../../components/BalanceForm/BalanceForm';
import { getCategoryExpense } from '../../redux/selectors/categoriesSelectors';
import style from './ExpenseView.module.scss';

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
        <TransactionContainer>
          <BalanceForm
            category={category}
            submitIncomeData={submitIncomeData}
          />
          <div className={style.wrapper}>
            <TransactionTable />
            <Summary />
          </div>
        </TransactionContainer>
      </Container>
    </main>
  );
}
