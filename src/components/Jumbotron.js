import React from 'react';

const mainMessage = `Saba's Birthday Itinerary`;

const Jumbotron = () => (
  <div style={{ paddingTop: '2rem' }}>
    <div className="jumbotron">
      <h1 className="display-4">{mainMessage}</h1>
      <hr className="my-4" />
      <p className="lead">
        The items will only reveal themselves when the time is right.
      </p>
    </div>
  </div>
);

export default Jumbotron;
