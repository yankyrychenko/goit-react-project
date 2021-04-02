import React from 'react';
import SelectWrap from 'react-select';
import style from './Select.module.scss';

const Select = props => {
  const { value, required, disabled, className } = props;
  let pardeValue = value;
  if (pardeValue === null) {
    pardeValue = '';
  }

  return (
    <div className={style.selectWrapperContainer}>
      <SelectWrap
        {...props}
        className={`${className} ${style.selectWrapper}`}
      />
      <input
        className={style.input}
        type="text"
        value={pardeValue}
        onChange={e => (e.target.value = pardeValue)}
        tabIndex={-1}
        autoComplete="off"
        required={required}
        disabled={disabled}
      />
    </div>
  );
};

export default Select;
