import React, { useState } from 'react';

const DifficultySlider = () => {
  const [value, setValue] = useState(50); // Varsayılan değer

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ width: '80%', textAlign: 'center', marginTop: '20px' }}>
      <label style={{ display: 'block', color: '#FFF', marginBottom: '10px' }}>Difficulty</label>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '8px',
          appearance: 'none',
          background: `linear-gradient(to right, #f50057 ${value}%, #ddd ${value}%)`, // Gradient arka plan
          borderRadius: '10px',
          outline: 'none',
          transition: 'background 0.3s ease', // Akıcı geçiş
        }}
        className="custom-slider" // Özel stil için sınıf ekliyorum
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', color: '#FFF' }}>
        <span>Easy</span>
        <span>Medium</span>
        <span>Hard</span>
      </div>
    </div>
  );
};

export default DifficultySlider;
