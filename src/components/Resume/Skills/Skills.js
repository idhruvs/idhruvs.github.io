import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import nodejs from '../../../assets/nodejs.png';
import htmlcss from '../../../assets/html5.png';
import javascript from '../../../assets/js.png';
import java from '../../../assets/java.png';
import angular from '../../../assets/angular.png';
import sql from '../../../assets/sql.png';
import react from '../../../assets/react.png';
import spring from '../../../assets/spring.png';
import defaultWebIcon from '../../../assets/default-web-icon.png';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.skills = this.props.skills;
  }

  getSkillIcon = name => {
    switch (name) {
      case 'javascript':
        return javascript;
      case 'angular':
        return angular;
      case 'htmlcss':
        return htmlcss;
      case 'spring':
        return spring;
      case 'react':
        return react;
      case 'java':
        return java;
      case 'nodejs':
        return nodejs;
      case 'sql':
        return sql;
      default:
        return defaultWebIcon;
    }
  };

  generateSkillsContainer = () => {
    const skillsContainer = [];
    if (this.skills.length > 0) {
      this.skills = this.skills.sort((a, b) => a.level - b.level);
    }
    this.skills.forEach(skill => {
      const skillLevel = skill.level + '%';
      skillsContainer.push(
        <div key={skill.id} className="skills-section">
          <div className="content">
            <img
              className="skill-logo"
              src={this.getSkillIcon(skill.id)}
              alt={skill.id}
            />
            {skill.name.toUpperCase()}
          </div>
          <div className="progress-wrapper">
            <div className="progress" style={{ width: skillLevel }} />
          </div>
        </div>
      );
    });
    return skillsContainer;
  };

  render() {
    return <div>{this.generateSkillsContainer()}</div>;
  }
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })
  ).isRequired,
};
