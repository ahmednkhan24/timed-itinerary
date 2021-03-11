import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const Item = ({
  title,
  startTime,
  endTime,
  info,
  address,
  timeToNextDestination,
}) => (
  <div>
    <h2>{title}</h2>
    <br />
    <h5>
      {startTime} - {endTime}
    </h5>
    <br />
    <ul>
      {info.map((item) => (
        <ListItem key={item} text={item} />
      ))}
      <ListItem key={address.name} text={address.name} />
      <ListItem key={address.text}>
        <a target="_blank" rel="noreferrer" href={address.url}>
          {address.text}
        </a>
      </ListItem>
      <ListItem key={address.url} text={timeToNextDestination} />
    </ul>
  </div>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  timeToNextDestination: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(PropTypes.string),
  address: PropTypes.objectOf(PropTypes.string),
};

Item.defaultProps = {
  info: [],
  address: {
    name: 'Finding Dorey',
    text: 'P Sherman, 42 Wallaby Way, Sydney',
    url: 'https://maps.google.com',
  },
};

export default Item;
