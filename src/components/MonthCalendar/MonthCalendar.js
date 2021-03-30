import React, { useEffect, useState } from 'react';
import Container from '../Container';
import styles from './MonthCalendar.module.scss';
import sprite from '../../img/sprite.svg';

const MonthArrows = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    date.setMonth(date.getMonth() - 1);
  }, []);
  const referenceDate = date;

  const options = { month: 'long' };
  const month = new Intl.DateTimeFormat('rus', options).format(date);
  const year = date.getFullYear();

  const setNextMonth = () => {
    referenceDate.setMonth(referenceDate.getMonth() + 1);
    setDate(new Date(referenceDate));
    formatDate(date);
  };

  const setPrevMonth = () => {
    referenceDate.setMonth(referenceDate.getMonth() - 1);
    setDate(new Date(referenceDate));
  };

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    let result = [year, month].join('-');
    // console.log(result);
    return result;
  }

  return (
    <Container>
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
          <button
            onClick={setNextMonth}
            className={`${styles.button}  ${styles.buttonNext}`}
            type="button"
          >
            <svg width="6" height="15">
              <use href={sprite + '#icon-arrow-right'}></use>
            </svg>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default MonthArrows;