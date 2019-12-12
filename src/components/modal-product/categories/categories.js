import React from 'react';
import './categories.sass';

const Categories = props => {
  return props.categories.map((value, index) => {
    return <option value={value} key={index}>{value}</option>
  })
}

export default Categories;