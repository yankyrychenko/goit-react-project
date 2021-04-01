import React from 'react';
import FixRequiredSelect from '../FixRequiredSelect/FixRequiredSelect';
import BaseSelect from 'react-select';

const Select = props => {
  return (
    <FixRequiredSelect
      {...props}
      SelectComponent={BaseSelect}
      options={props.options}
    />
  );
};

export default Select;
