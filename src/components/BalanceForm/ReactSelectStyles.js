const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#52555F' : '#C7CCDC',
    backgroundColor: state.isSelected ? '#c7ccdc' : 'white',
    padding: 10,
    '&:hover': {
      backgroundColor: state.isSelected ? null : '#F5F6FB',
      color: state.isSelected ? null : '#52555F',
    },
  }),

  menuList: styles => ({
    ...styles,
    paddingTop: 0,
    paddingBottom: 0,
  }),

  valueContainer: styles => ({
    ...styles,
    padding: '0',
  }),

  singleValue: styles => ({
    ...styles,
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
