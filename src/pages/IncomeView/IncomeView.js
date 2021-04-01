import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import TransactionContainer from '../../components/TransactionContainer/TransactionContainer';
import BalanceForm from '../../components/BalanceForm';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import Summary from '../../components/Summary/Summary';
import transactionsOperations from '../../redux/operations/transactionsOperations';
import categoriesOperations from '../../redux/operations/categoriesOperations';
import style from './IncomeView.module.scss';

export default function IncomeView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.handleIncomeGet());
    dispatch(categoriesOperations.handleIncomeCategGet());
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
