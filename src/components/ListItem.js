/* eslint-disable react/prop-types */
import React from 'react';

const ListItem = ({ text, children }) =>
  children ? (
    <li>{children}</li>
  ) : (
    <li>
      <h6>{text}</h6>
    </li>
  );

export default ListItem;
