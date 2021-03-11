import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import Timer from './Timer';
import UnlockedItem from './UnlockedItem';

const Item = ({ startTime, ...restOfProps }) => {
  const momentStartTime = moment(startTime, ['h:mm A']).tz('America/Chicago');
  const [countDownDone, setCountDownDone] = useState(false);

  return !countDownDone ? (
    <>
      <Timer
        endTime={momentStartTime.subtract(30, 'minutes').toDate()}
        finishCountDown={() => setCountDownDone(true)}
      />
      <hr className="my-4" />
    </>
  ) : (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <UnlockedItem startTime={startTime} {...restOfProps} />
      <hr className="my-4" />
    </>
  );
};

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
