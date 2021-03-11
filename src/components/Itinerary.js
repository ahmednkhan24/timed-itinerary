import React from 'react';
import Item from './Item';
import data from '../data';

const Itinerary = () => (
  <>
    {data.map((item) => (
      <>
        <Item
          key={item.title}
          title={item.title}
          startTime={item.startTime}
          endTime={item.endTime}
          timeToNextDestination={item.timeToNextDestination}
          info={item.info}
          address={item.address}
        />
      </>
    ))}
    <br />
    <br />
  </>
);

export default Itinerary;
