import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './MonthCalendar.module.scss';
import sprite from '../../img/sprite.svg';
import operations from '../../redux/operations/periodDataOperations';
import {
  getIncomeTotal,
  getExpenseTotal,
} from '../../redux/selectors/periodDataSelectors';

const MonthCalendar = ({ setActiveCategory }) => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const incomeTotal = useSelector(getIncomeTotal);
  const expenseTotal = useSelector(getExpenseTotal);

  useEffect(() => {
    dispatch(operations.getPeriodData(formatDate(date)));
  }, [dispatch, incomeTotal, expenseTotal, date]);

  const referenceDate = date;

  const options = { month: 'long' };
  const month = new Intl.DateTimeFormat('rus', options).format(date);
  const year = date.getFullYear();

  const setNextMonth = () => {
    referenceDate.setMonth(referenceDate.getMonth() + 1);
    setDate(new Date(referenceDate));
    dispatch(operations.getPeriodData(formatDate(date)));
    setActiveCategory('');
  };

  const setPrevMonth = () => {
    referenceDate.setMonth(referenceDate.getMonth() - 1);
    setDate(new Date(referenceDate));
    dispatch(operations.getPeriodData(formatDate(date)));
    setActiveCategory('');
  };

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    let result = [year, month].join('-');
    return result;
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.currentPeriod}>Текущий период:</p>
      <div className={styles.calendarNav}>
        <button
          onClick={setPrevMonth}
          className={`${styles.button}  ${styles.buttonPrev}`}
          type="button"
        >
          <svg width="6" height="15">
            <use href={sprite + '#icon-arrow-left'}></use>
          </svg>
        </button>
        <span className={styles.date}>{`${month} ${year}`}</span>
        {date.getMonth() !== new Date().getMonth() && (
          <button
            onClick={setNextMonth}
            className={`${styles.button}  ${styles.buttonNext}`}
            type="button"
          >
            <svg width="6" height="15">
              <use href={sprite + '#icon-arrow-right'}></use>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default MonthCalendar;
