// components/Footer.js
import React from 'react';
import { ReactComponent as FriendsIcon } from '../assets/icons/Friends.svg';
import { ReactComponent as BucketIcon } from '../assets/icons/Bucket.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/Profile.svg';
import '../css/Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <button className="footer-button" aria-label="Friends">
        <FriendsIcon width="24px" height="24px" fill="#FFF" />
      </button>
      <button className="footer-button" aria-label="Challenges">
        <BucketIcon width="24px" height="24px" fill="#FFF" />
      </button>
      <button className="footer-button" aria-label="Profile">
        <ProfileIcon width="24px" height="24px" fill="#FFF" />
      </button>
    </footer>
  );
}

export default Footer;