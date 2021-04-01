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

import { useSelector } from 'react-redux';
import operation from '../../redux/selectors/transactionsSelectors'

export default function ExpenseView() {
  const dispatch = useDispatch();
  const costList = useSelector(operation.getExpenseTransaction)

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
            <TransactionTable costList={costList}/>
            <Summary />
          </div>
        </TransactionContainer>
      </Container>
    </main>
  );
}
