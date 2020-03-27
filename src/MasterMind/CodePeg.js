import React from 'react';
import Select from 'react-select';

const colorOptions = [
  { value: 'blue', label: 'Blue', color: '#0052CC'},
  { value: 'red', label: 'Red', color: '#FF5630'},
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'white', label: 'White', color: '#FFF' },
  { value: 'black', label: 'Black', color: '#000' },
];

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

function Color() {
  return (
    <Select
      label="Select color"
      options={colorOptions}
      styles={colorStyles}
    />
  );
}

export default Color;
