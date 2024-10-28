// components/DifficultySlider.js
import React, { useState } from 'react';
import '../css/DifficultySlider.css';

function DifficultySlider() {
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    event.target.style.setProperty('--value', `${(newValue - 1) * 50}%`);
  };

  return (
    <section className="difficulty-slider">
      <label htmlFor="difficulty" className="difficulty-label">Difficulty</label>
      <input
        type="range"
        id="difficulty"
        min="1"
        max="3"
        step="1"
        value={value}
        className="difficulty-range"
        onChange={handleChange}
        style={{ '--value': `${(value - 1) * 50}%` }}
      />
      <div className="difficulty-levels">
        <span>Easy</span>
        <span>Medium</span>
        <span>Hard</span>
      </div>
    </section>
  );
}

export default DifficultySlider;