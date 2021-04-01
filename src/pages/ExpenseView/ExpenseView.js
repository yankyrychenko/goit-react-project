import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import TransactionContainer from '../../components/TransactionContainer/TransactionContainer';
import BalanceForm from '../../components/BalanceForm';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import Summary from '../../components/Summary/Summary';
import transactionsOperations from '../../redux/operations/transactionsOperations';
import categoriesOperations from '../../redux/operations/categoriesOperations';
import style from './ExpenseView.module.scss';

export default function ExpenseView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.handleExpenseGet());
    dispatch(categoriesOperations.handleExpenseCategGet());
  }, [dispatch]);

  return (
    <main>
      <Container>
        <TransactionContainer>
          <BalanceForm />
          <div className={style.wrapper}>
            <TransactionTable />
            <Summary />
          </div>
        </TransactionContainer>
      </Container>
    </main>
  );
}
