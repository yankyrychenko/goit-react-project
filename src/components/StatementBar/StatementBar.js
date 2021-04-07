import React from 'react';
import { useSelector } from 'react-redux';
import {
  getIncomeTotal,
  getExpenseTotal,
} from '../../redux/selectors/periodDataSelectors';
import styles from './StatementBar.module.scss';

Number.prototype.format = function (n, x, s, c) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
    num = this.toFixed(Math.max(0, ~~n));

  return (c ? num.replace('.', c) : num).replace(
    new RegExp(re, 'g'),
    '$&' + (s || ','),
  );
};

const StatementBar = () => {
  const incomeTotal = useSelector(getIncomeTotal);

  const expenseTotal = useSelector(getExpenseTotal);

  const valueIncomeTotal = incomeTotal?.format(2, 3, ' ', '.');

  const valueExpenseTotal = expenseTotal?.format(2, 3, ' ', '.');

  return (
    <div className={styles.wrap}>
      <ul className={styles.statementBar}>
        <li className={`${styles.statementBarItem} `}>
          <div className={styles.containerDetails}>
            <h2 className={styles.statementBarTitle}>Расходы:</h2>
            <div className={styles.expensesAmount}>
              &#45; {valueExpenseTotal} грн.
            </div>
          </div>
        </li>
        <li
          className={`${styles.statementBarItem} ${styles.statementBarItemBorder}`}
        >
          <div className={styles.containerDetails}>
            <h2 className={styles.statementBarTitle}>Доходы:</h2>
            <div className={styles.incomeAmount}>
              &#43; {valueIncomeTotal} грн.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StatementBar;
