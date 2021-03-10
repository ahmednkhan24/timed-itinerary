import React from 'react';
import Jumbotron from './components/Jumbotron';
import Itinerary from './components/Itinerary';

const App = () => (
  <div className="container">
    <Jumbotron date="March 11, 2021" />
    <Itinerary />
  </div>
);

export default App;
