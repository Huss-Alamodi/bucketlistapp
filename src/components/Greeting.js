import React from 'react';
import './Greeting.css';

const Greeting = ({ name }) => {
  return (
    <h1 className="fade-in">
      Hi {name}!
    </h1>
  );
};

export default Greeting;
