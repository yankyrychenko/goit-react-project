import React from 'react';
import style from './BalanceForm.module.scss';
import sprite from '../../img/sprite.svg';

const BalanceForm = () => {
  return (
    <form className={style.form}>
      <div className={style.test}>
        <div className={style.labelsContainer}>
          <label className={style.label}>
            <input
              className={style.input}
              type="text"
              placeholder="Описание товара"
            />
          </label>
          <label className={style.labelSelect}>
            <select className={style.select}>
              <option
                value="default-option-name"
                selected
                disabled
                className={style.defaultOption}
              >
                Название категории
              </option>
              <option value="" className={style.option}>
                Доход
              </option>
            </select>
          </label>
        </div>
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
      </div>
      <button type="submit" className={style.buttonSubmit}>
        Ввод
      </button>
      <button type="button" className={style.buttonClear}>
        Очистить
      </button>
    </form>
  );
};

export default BalanceForm;
