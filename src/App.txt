import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import FriendspageComponent from './FriendspageComponent';
import HomepageComponent from './HomepageComponent'; 
import LoadingpageComponent from './LoadingpageComponent';
import LoginPageComponent from './LoginPageComponent'; 
import ProfilepageComponent from './ProfilepageComponent';
import BottomNavBar from './BottomNavBar'; // Import the navigation bar

function App() {
  return (
    <Router>
      <div>
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<HomepageComponent />} />
          <Route path="/friends" element={<FriendspageComponent />} />
          <Route path="/loading" element={<LoadingpageComponent />} />
          <Route path="/login" element={<LoginPageComponent />} />
          <Route path="/profile" element={<ProfilepageComponent />} />
        </Routes>

        {/* Always show the bottom navigation bar */}
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
