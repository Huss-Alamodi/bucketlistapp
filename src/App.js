// App.js
import React from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import DifficultySlider from './components/DifficultySlider';
import ChallengeCard from './components/ChallengeCard';
import Footer from './components/Footer';
import './css/App.css';
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#333333', color: '#FFF', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
      <Header />
      <Greeting name="James" />
      <DifficultySlider />
      <ChallengeCard challenge='Dang boy, SUIIIIII' />
      <Footer />
    </div>
  );
}

export default App;
