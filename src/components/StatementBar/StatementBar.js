import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import periodDate from '../../redux/operations/periodDataOperations';
import {
  getIncomeTotal,
  getExpenseTotal,
} from '../../redux/selectors/periodDataSelectors';
import styles from './StatementBar.module.scss';

const StatementBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(periodDate.getPeriodData('2020-04'));
    }, 3000);
  }, []);

  const incomeTotal = useSelector(getIncomeTotal);

  const expenseTotal = useSelector(getExpenseTotal);

  return (
    <div className={styles.wrap}>
      <ul className={styles.statementBar}>
        <li className={styles.statementBarItem}>
          <div className={styles.containerDetails}>
            <h2 className={styles.statementBarTitle}>Расходы:</h2>
            <div className={styles.expensesAmount}>- {expenseTotal} грн.</div>
          </div>
        </li>
        <li
          className={`${styles.statementBarItem} ${styles.statementBarItemBorder}`}
        >
          <div className={styles.containerDetails}>
            <h2 className={styles.statementBarTitle}>Доходы:</h2>
            <div className={styles.incomeAmount}>+ {incomeTotal} грн.</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StatementBar;
