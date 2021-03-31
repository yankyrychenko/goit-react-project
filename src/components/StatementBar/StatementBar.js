import React from 'react';
import styles from './StatementBar.module.scss';

const StatementBar = () => {
  return (
    <div className={styles.wrap}>
      <ul className={styles.statementBar}>
        <li className={styles.statementBarItem}>
          <div className={styles.containerDetails}>
            <h2 className={styles.statementBarTitle}>Расходы:</h2>
            <div className={styles.expensesAmount}>-18 000.00 грн.</div>
          </div>
        </li>
        <li
          className={`${styles.statementBarItem} ${styles.statementBarItemBorder}`}
        >
          <div className={styles.containerDetails}>
            <h2 className={styles.statementBarTitle}>Доходы:</h2>
            <div className={styles.incomeAmount}>+45 000.00 грн.</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StatementBar;
