import React from 'react';
import Jumbotron from './components/Jumbotron';
import Itinerary from './components/Itinerary';

const date = 'Thursday March 11, 2021';
const mainMessage = `The items will only reveal themselves when the time is right.`;

const App = () => (
  <div className="container">
    <Jumbotron date={date} message={mainMessage} />
    <Itinerary />
  </div>
);

export default App;
