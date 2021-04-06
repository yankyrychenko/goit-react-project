const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#52555F' : '#C7CCDC',
    backgroundColor: state.isSelected ? '#c7ccdc' : 'white',
    padding: 10,
    '&:hover': {
      backgroundColor: state.isSelected ? null : '#F5F6FB',
      color: state.isSelected ? null : '#52555F',
      cursor: 'pointer',
    },
  }),

  menuList: styles => ({
    ...styles,
    paddingTop: 0,
    paddingBottom: 0,
    cursor: 'pointer',
  }),

  valueContainer: styles => ({
    ...styles,
    padding: '0',
    cursor: 'pointer',
  }),

  singleValue: styles => ({
    ...styles,
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    lineHeight: 0.85,
    letterSpacing: '0.02em',
    color: '#000000',
    cursor: 'pointer',
  }),

  control: styles => ({
    ...styles,
    backgroundColor: 'transparent',
    border: 0,
    boxShadow: 'none',
    cursor: 'pointer',
  }),

  placeholder: styles => ({
    ...styles,
    color: '#c7ccdc',
    margin: '0',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    lineHeight: 0.85,
    letterSpacing: '0.02em',
  }),
};

export default customStyles;
