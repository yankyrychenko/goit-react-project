import React, { useState } from 'react';
import { useWindowSize } from 'react-use-size';
import style from './BalanceForm.module.scss';
import PropTypes from 'prop-types';
import sprite from '../../img/sprite.svg';
import customStyles from './ReactSelectStyles';
import CustomCalendar from '../CustomCalendar/CustomCalendar';
import Select from './Select/Select';
import variables from './variables';
import 'react-calendar/dist/Calendar.css';

const BalanceForm = ({ category, submitIncomeData }) => {
  const options = category.map(el => ({ value: el, label: el }));

  const { width } = useWindowSize();
  const [date, setDate] = useState('');
  const [value, setValue] = useState(null);

  const initialForm = {
    description: '',
    amount: '',
    date: date,
    category: '',
  };

  const [form, setForm] = useState({
    ...initialForm,
  });

  const handleFormValue = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const getDate = date => {
    setDate(date);
    setForm({ ...form, [variables.date]: date });
  };

  const handleCategory = value => {
    setForm({ ...form, [variables.category]: value.value });
    setValue(value);
  };

  const clearForm = () => {
    setForm({ ...initialForm });
    setValue(null);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    submitIncomeData(form);
    clearForm();
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className={style.form}>
        <div className={style.test}>
          <CustomCalendar getDate={getDate} />
          <div className={style.labelsContainer}>
            <label className={style.label}>
              <input
                className={style.input}
                type="text"
                placeholder="Описание товара"
                value={form.description}
                name={variables.description}
                onChange={handleFormValue}
                required
              />
            </label>
            <label className={style.labelSelect}>
              <Select
                required
                options={options}
                styles={customStyles}
                placeholder={'Категория товара'}
                value={value}
                components={{
                  IndicatorSeparator: () => null,
                }}
                isSearchable={false}
                onChange={handleCategory}
              />
            </label>
            {width > 767 && (
              <div className={style.inputNumberContainerTD}>
                <label className={style.labelNumberTD}>
                  <input
                    className={style.inputNumberTD}
                    type="number"
                    placeholder="00,00"
                    value={form.amount}
                    name={variables.amount}
                    onChange={handleFormValue}
                    required
                  />
                </label>
                <div className={style.svgContainerTD}>
                  <svg width="20" height="20" className={style.svg}>
                    <use href={sprite + '#icon-calculator'}></use>
                  </svg>
                </div>
              </div>
            )}
          </div>
          {width <= 767 && (
            <div className={style.inputNumberContainer}>
              <label className={style.labelNumber}>
                <input
                  className={style.inputNumber}
                  type="number"
                  placeholder="00.00 UAH"
                  name={variables.amount}
                  value={form.amount}
                  onChange={handleFormValue}
                  required
                />
              </label>
              <div className={style.svgContainer}>
                <svg width="20" height="20" className={style.svg}>
                  <use href={sprite + '#icon-calculator'}></use>
                </svg>
              </div>
            </div>
          )}
        </div>
        <div className={style.buttonContainer}>
          <button type="submit" className={style.buttonSubmit}>
            Ввод
          </button>
          <button
            onClick={clearForm}
            type="button"
            className={style.buttonClear}
          >
            Очистить
          </button>
        </div>
      </form>
    </>
  );
};

BalanceForm.propTypes = {
  category: PropTypes.array.isRequired,
  submitIncomeData: PropTypes.func.isRequired,
};

export default BalanceForm;
