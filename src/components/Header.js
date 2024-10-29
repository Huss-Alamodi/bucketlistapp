// components/Header.js
import React from 'react';
import{ ReactComponent as BellIcon } from '../assets/icons/Bell.svg';

function Header() {
  return (
    <header style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333333', color: '#FFF' }}>
      <button style={{ background: 'none', border: 'none', fontSize: '1.5rem', color: '#FFF' }}>☰</button>
      <h1 style={{ fontSize: '1.2rem', margin: 0 }}>BUCKETLIST</h1>
      <button style={{ background: 'none', border: 'none', fontSize: '1.5rem', color: '#FFF' }}>
        <BellIcon width="24px" height="24px" fill="#F9EBB7" />
      </button>
    </header>
  );
}

export default Header;
