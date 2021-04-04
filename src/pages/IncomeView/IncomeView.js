import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from 'react-use-size';
import Container from '../../components/Container';
import TransactionContainer from '../../components/TransactionContainer/TransactionContainer';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import Summary from '../../components/Summary/Summary';
import transactionsOperations from '../../redux/operations/transactionsOperations';
import categoriesOperations from '../../redux/operations/categoriesOperations';
import BalanceForm from '../../components/BalanceForm/BalanceForm';
import BalanceCustom from '../../components/BalanceCustom/BalanceCustom';
import GoToReport from '../../components/GoToReport/GoToReport';
import { getCategoryIncome } from '../../redux/selectors/categoriesSelectors';
import operation from '../../redux/selectors/transactionsSelectors';
import { handleDeleteIncome } from '../../redux/operations/transactionsDeleteOperations';
import style from './IncomeView.module.scss';

export default function IncomeView() {
  const dispatch = useDispatch();
  const { width } = useWindowSize();

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
        {width > 767 && (
          <div className={style.balanceWrap}>
            <BalanceCustom />
            <GoToReport />
          </div>
        )}

        <TransactionContainer>
          <BalanceForm
            category={category}
            submitIncomeData={submitIncomeData}
          />
          <div className={style.wrapper}>
            {width > 767 && (
              <TransactionTable
                costList={costList}
                fnRemove={handleDeleteIncome}
              />
            )}
            {width > 767 && <Summary />}
          </div>
        </TransactionContainer>
      </Container>
    </main>
  );
}
