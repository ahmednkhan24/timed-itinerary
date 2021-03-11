// https://github.com/jwhubert91/100daysofreact/tree/master/day-14-inauguration-countdown
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: 0,
      end: 0,
      daysLeft: 0,
      hoursLeft: 0,
      minutesLeft: 0,
      secondsLeft: 0,
      message: '',
    };
  }

  componentDidMount() {
    this.countdown();
  }

  countdown() {
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    // timer function
    const countdownTimer = setInterval(() => {
      this.setState({ now: new Date().getTime() });
      // constants
      this.setState({ end: this.props.endTime.getTime() });
      // this.setState({ end: new Date('March 11, 2021 00:00:00').getTime() });
      // this.setState({ end: new Date('March 11, 2021 00:00:00').getTime() });
      const { end, now } = this.state;
      const difference = end - now;

      if (difference < 0) {
        clearInterval(countdownTimer);
        this.props.finishCountDown();
        this.setState({ message: 'Time Up' });
        return;
      }

      this.setState({ daysLeft: Math.floor(difference / days) });
      this.setState({ hoursLeft: Math.floor((difference % days) / hours) });
      this.setState({
        minutesLeft: Math.floor((difference % hours) / minutes),
      });
      this.setState({
        secondsLeft: Math.floor((difference % minutes) / seconds),
      });
    }, seconds);
  }

  render() {
    // const { daysLeft, hoursLeft, minutesLeft, secondsLeft } = this.state;
    return (
      <div className="timer-container">
        <p id="done" />
        <ul>
          <li>
            <span id="days">{this.state.daysLeft}</span> Days
          </li>
          <li>
            <span id="hours">{this.state.hoursLeft}</span> Hours
          </li>
          <li>
            <span id="minutes">{this.state.minutesLeft}</span> Minutes
          </li>
          <li>
            <span id="seconds">{this.state.secondsLeft}</span> Seconds
          </li>
        </ul>
      </div>
    );
  }
}

export default Timer;
