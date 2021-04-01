import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';
import TransactionContainer from '../../components/TransactionContainer/TransactionContainer';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import Summary from '../../components/Summary/Summary';
import transactionsOperations from '../../redux/operations/transactionsOperations';
import categoriesOperations from '../../redux/operations/categoriesOperations';
import BalanceForm from '../../components/BalanceForm/BalanceForm';
import { getCategoryIncome } from '../../redux/selectors/categoriesSelectors';
import operation from '../../redux/selectors/transactionsSelectors';
import style from './IncomeView.module.scss';

export default function IncomeView() {
  const dispatch = useDispatch();

  const costList = useSelector(operation.getIncomeTransaction);
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
        <TransactionContainer>
          <BalanceForm
            category={category}
            submitIncomeData={submitIncomeData}
          />
          <div className={style.wrapper}>
            <TransactionTable costList={costList} />
            <Summary />
          </div>
        </TransactionContainer>
      </Container>
    </main>
  );
}
