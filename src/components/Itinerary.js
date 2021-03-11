import React from 'react';
import Item from './Item';
import data from '../data';

const Itinerary = () => (
  <>
    {data.map((item) => (
      <>
        <Item
          title={item.title}
          startTime={item.startTime}
          endTime={item.endTime}
          timeToNextDestination={item.timeToNextDestination}
          info={item.info}
          address={item.address}
        />
        <hr className="my-4" />
      </>
    ))}
    <br />
    <br />
  </>
);

export default Itinerary;
