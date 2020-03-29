import React from 'react';
import Select from 'react-select';

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    border: '1px solid #282c34',
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colorStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data }) => ({ 
    ...styles, 
    ...dot(data.color) 
  }),
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

function CodePeg({colorOptions}) {
  return (
    <Select
      label="Select color"
      options={colorOptions}
      styles={colorStyles}
    />
  );
}

export default CodePeg;
