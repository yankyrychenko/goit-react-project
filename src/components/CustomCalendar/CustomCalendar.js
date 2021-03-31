import React, { useState, useEffect } from 'react';
import style from './CustomCalendar.module.scss';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import sprite from '../../img/sprite.svg';

const CustomCalendar = ({ getDate }) => {
  const [value, onChange] = useState(new Date());
  const [isOpenCalendar, setOpenCalendar] = useState(false);

  const day = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();

  useEffect(() => {
    const chosenDate = `${year}-${month > 9 ? month : `0` + month}-${
      day > 9 ? day : `0` + day
    }`;
    getDate(chosenDate);
  }, []);

  useEffect(() => {
    const chosenDate = `${year}-${month > 9 ? month : `0` + month}-${
      day > 9 ? day : `0` + day
    }`;
    getDate(chosenDate);
  }, [value]);

  const onToggleCalendar = e => {
    setOpenCalendar(!isOpenCalendar);
  };

  const onCloseCalendar = e => {
    if (e.target === e.currentTarget) {
      setOpenCalendar(false);
    }
  };

  return (
    <>
      {isOpenCalendar && (
        <div className={style.overlay} onClick={onCloseCalendar} />
      )}
      <div className={style.calendarContainer} onClick={onToggleCalendar}>
        <div className={style.calendarSvgContainer} onClick={onToggleCalendar}>
          <svg width="20" height="20" className={style.svg}>
            <use href={sprite + '#icon-calendar'}></use>
          </svg>
        </div>
        <div>
          <p className={style.calendarText}>
            {day > 9 ? day : `0` + day}.{month > 9 ? month : `0` + month}.{year}
          </p>
        </div>
      </div>
      <div className={isOpenCalendar ? style.calendarIsActive : style.calendar}>
        <Calendar onChange={onChange} value={value} locale={'ru-ru'} />
      </div>
    </>
  );
};

CustomCalendar.prototype = {
  getDate: PropTypes.func.isRequired,
};

export default CustomCalendar;
