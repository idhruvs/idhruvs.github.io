import React from 'react';

import './style.scss';

const SocialIcons = (props, context) => {
  const colorPrimary = '#FFFFFF';
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/idhruvs" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/idhruvs" style={ { color: colorPrimary } }><i className="fab fa-twitter"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/story/idhruvs" style={ { color: colorPrimary } }><i className="fab fa-stack-overflow"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dhruv-shah-/" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@idhruv" style={ { color: colorPrimary } }><i className="fab fa-medium"></i></a>
      </div>
  );
};


export default SocialIcons;