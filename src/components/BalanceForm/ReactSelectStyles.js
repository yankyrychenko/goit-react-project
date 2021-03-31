const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'white' : '#000000',
    backgroundColor: state.isSelected ? '#ff751d' : 'white',
    padding: 10,
  }),

  menu: (provided, state) => ({
    ...provided,
    paddingLeft: 5,
    paddingRight: 5,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: '0',
  }),

  singleValue: provided => ({
    ...provided,
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    lineHeight: 0.85,
    letterSpacing: '0.02em',
    color: '#000000',
  }),

  control: styles => ({
    ...styles,
    backgroundColor: 'transparent',
    border: 0,
    boxShadow: 'none',
  }),

  placeholder: styles => ({ ...styles, color: '#c7ccdc', margin: '0' }),
};

export default customStyles;
