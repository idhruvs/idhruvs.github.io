import React from 'react';

import './style.scss';

const SocialIcons = (props, context) => {
  const colorPrimary = '#000000';
  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/idhruvs"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-github" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/idhruvs"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://stackoverflow.com/story/idhruvs"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-stack-overflow" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/dhruv-shah-/"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@idhruv"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-medium" />
      </a>
    </div>
  );
};

export default SocialIcons;
