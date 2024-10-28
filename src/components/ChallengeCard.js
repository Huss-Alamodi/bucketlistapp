// components/ChallengeCard.js
import React from 'react';

function ChallengeCard() {
  return (
    <section style={{ backgroundColor: '#FFF5DC', color: '#333', padding: '1rem', borderRadius: '1rem', width: '80%', textAlign: 'center', margin: '1rem 0' }}>
      <h3 style={{ margin: '0.5rem 0' }}>Your challenge today is:</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec voila ornare velit eu efficitur.</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
        <button style={{ background: 'none', border: 'none', fontSize: '1.5rem' }}>➡️</button>
        <button style={{ background: 'none', border: 'none', fontSize: '1.5rem' }}>✔️</button>
      </div>
    </section>
  );
}

export default ChallengeCard;
