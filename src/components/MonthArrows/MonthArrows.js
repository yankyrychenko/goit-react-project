import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Container from '../Container';
import './Calendar.scss';

const MonthArrows = () => {
  const [value, onChange] = useState(new Date());

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    console.log([year, month].join('-'));
    return [year, month].join('-');
  }

  const changeMonth = ({ activeStartDate, value, view }) =>
    formatDate(activeStartDate);
  return (
    <Container>
      <p>Текущий период:</p>
      <Calendar
        locale={'ru'}
        value={value}
        onActiveStartDateChange={changeMonth}
      />
    </Container>
  );
};

export default MonthArrows;
