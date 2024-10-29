// components/ChallengeCard.js
import React from 'react';
import PropTypes from 'prop-types';
import '../css/ChallengeCard.css';

function ChallengeCard({ challenge }) {
  return (
    <section className="challenge-card">
      <h3>Your challenge today is:</h3>
      <p>{challenge}</p>
      <div className="challenge-card-buttons">
        <button className="challenge-card-button">➡️</button>
        <button className="challenge-card-button">✔️</button>
      </div>
    </section>
  );
}

ChallengeCard.propTypes = {
  challenge: PropTypes.string.isRequired,
};

export default ChallengeCard;