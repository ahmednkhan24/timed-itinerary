import React from 'react';
import PropTypes from 'prop-types';

const mainMessage = `Saba's Birthday Itinerary`;

const Jumbotron = ({ date, message = '' }) => (
  <div style={{ paddingTop: '2rem' }}>
    <div className="jumbotron">
      <h1 className="display-4">{mainMessage}</h1>
      <p className="lead">{message}</p>
      <hr className="my-4" />
      <p>{date}</p>
    </div>
  </div>
);

Jumbotron.propTypes = {
  date: PropTypes.string.isRequired,
  message: PropTypes.string,
};

Jumbotron.defaultProps = {
  message: 'hello world',
};

export default Jumbotron;
