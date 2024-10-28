// components/Greeting.js
import React from 'react';

function Greeting({ name }) {
  return (
    <section style={{ textAlign: 'center', margin: '1rem 0' }}>
      <h2 style={{ fontSize: '2rem', color: '#FFD1C1' }}>Hi <span style={{ color: '#FF8888' }}>{name}</span>!</h2>
    </section>
  );
}

export default Greeting;
