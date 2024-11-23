import React, { useState } from 'react';

const ChallengeCard = ({ challenge }) => {
  const [response, setResponse] = useState(null);

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#F5F5DC', 
        borderRadius: '15px',
        width: '50%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding a shadow to the card
        color: '#000000', // Changing the text color to black
        marginBottom: '100px', // Add some space between the card and the footer
      }}
    >
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Your challenge today is:</h2>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          marginBottom: '30px',
        }}
      >
        {challenge}
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px', // the gap between the buttons
          marginTop: '30px', // add some space between the buttons and the message
        }}
      >
        <button
          onClick={() => setResponse('declined')}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            padding: '15px 25px',
            margin: '0 10px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '18px', // make the font size bigger
          }}
        >
          ✖ Decline
        </button>
        <button
          onClick={() => setResponse('accepted')}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '15px 25px',
            margin: '0 10px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '18px', // make the font size bigger
          }}
        >
          ✔ Accept
        </button>
      </div>
      {response && (
        <p
          style={{
            marginTop: '30px',
            marginBottom: '20px', // add some space between the message and the buttons
            fontSize: '18px',
            fontWeight: 'bold',
            color: response === 'accepted' ? '#28a745' : '#dc3545',
          }}
        >
          You have {response === 'accepted' ? 'accepted' : 'declined'} the challenge.
        </p>
      )}
    </div>
  );
};

export default ChallengeCard;
