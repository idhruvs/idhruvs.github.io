import React from 'react';
import SocialIcons from '@components/SocialIcons';
import BrowserNotes from '@components/BrowserNotes';
import Title from '@components/Title';

import './style.scss';

const LandingPage = (props, context) => {
  const colorPrimary = '#000000';
  const bgPrimary = '#ffffff';

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Title />
      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="intro-wrapper">
          <SocialIcons />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
