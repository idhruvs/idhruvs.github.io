import React from 'react';
import SocialIcons from '@components/SocialIcons';
import BrowserNotes from '@components/BrowserNotes';

import './style.scss';

const LandingPage = (props, context) => {
  const colorPrimary = '#FFFFFF';
  const bgPrimary = '#485564';

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">

      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Dhruv!</div>
          <div className="tagline">
            Full Stack Developer | Machine Learning Enthusiast 
          </div>
          <SocialIcons />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
