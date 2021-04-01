import React, { useEffect } from 'react';
import styles from './Summary.module.scss';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import transactionsSelectors from '../../redux/selectors/transactionsSelectors';

const Summary = () => {
  const location = useLocation();
  let transactions = useSelector(state =>
    transactionsSelectors.getTransactions(state),
  );
  let data = {};
  const options = { month: 'long' };
  const monthToShow = [];

  let transactionsToShow = [];

  if (location.pathname === '/income') {
    transactionsToShow = transactions.incomes.incomes;
  }
  if (location.pathname === '/expense') {
    transactionsToShow = transactions.expenses.expenses;
  }
  transactionsToShow?.forEach(tr => {
    let date = new Date(tr.date);
    let year = date.getFullYear();
    let month = new Intl.DateTimeFormat('rus', options).format(date);
    data = { ...data, [year]: { ...data[year], [month]: 0 } };
  });
  transactionsToShow?.forEach(tr => {
    let date = new Date(tr.date);
    let year = date.getFullYear();
    let month = new Intl.DateTimeFormat('rus', options).format(date);
    data[year][month] += tr.amount;
  });
  // console.log(data);

  for (let i = 1; i <= 6; i++) {
    let currentDate = new Date();

    currentDate.setMonth(currentDate.getMonth() - i);
    const month = new Intl.DateTimeFormat('rus', options).format(currentDate);
    const year = currentDate.getFullYear();

    // console.log(test);
    // console.log(data[year][month]);
    // console.log(data?.[year]?.[month]);
    // console.log(data[year], data[year][month]);
    // console.log(currentDate);
    // console.log(currentDate.toLocaleDateString());
  }

  return (
    <table className={styles.table}>
      <tbody>
        <tr key="sum">
          <th className={styles.tableHeader} colSpan="2">
            CВОДКА
          </th>
        </tr>
        <tr key="1">
          {/* пример */}

          <th>december</th>
          <th>10000</th>
        </tr>
        <tr key="2">
          {/*пример */}
          <th>october</th>
          <th>10000</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Summary;
