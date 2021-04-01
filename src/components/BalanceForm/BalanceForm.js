import React, { useState } from 'react';
import { useWindowSize } from 'react-use-size';
import style from './BalanceForm.module.scss';
import sprite from '../../img/sprite.svg';
import customStyles from './ReactSelectStyles';
import 'react-calendar/dist/Calendar.css';
import CustomCalendar from '../CustomCalendar/CustomCalendar';
import Select from 'react-select';

const BalanceForm = () => {
  const { width } = useWindowSize();
  const [chosenDate, setChosenDate] = useState('');
  const [category, setCategory] = useState(null);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const getDate = data => {
    setChosenDate(data);
  };

  const handleCategory = ({ value }) => {
    setCategory(value);
  };

  return (
    <>
      <form className={style.form}>
        <div className={style.test}>
          <CustomCalendar getDate={getDate} />
          <div className={style.labelsContainer}>
            <label className={style.label}>
              <input
                className={style.input}
                type="text"
                placeholder="Описание товара"
              />
            </label>
            <label className={style.labelSelect}>
              <Select
                options={options}
                styles={customStyles}
                placeholder={'Категория товара'}
                components={{
                  IndicatorSeparator: () => null,
                }}
                isSearchable={false}
                onChange={e => handleCategory(e)}
                required
              />
            </label>
            {width > 767 && (
              <div className={style.inputNumberContainerTD}>
                <label className={style.labelNumberTD}>
                  <input
                    className={style.inputNumberTD}
                    type="number"
                    placeholder="00,00"
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
          <button type="button" className={style.buttonClear}>
            Очистить
          </button>
        </div>
      </form>
    </>
  );
};

export default BalanceForm;
