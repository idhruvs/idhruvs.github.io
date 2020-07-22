import React from 'react';
import nodejs from '../../assets/nodejs.png';
import html5 from '../../assets/html5.png';
import js from '../../assets/js.png';
import java from '../../assets/java.png';
import angular from '../../assets/angular.png';
import sql from '../../assets/sql.png';
import react from '../../assets/react.png';
import spring from '../../assets/spring.png';
import mybatis from '../../assets/mybatis.png';

import './style.scss';

const IconArray = (props, context) => {
  const { iconList } = props;

  return (
    <div className="tech-icon">
      {iconList.map((icon, index) => {
        let renderIcon;
        switch (icon) {
          case 'nodejs':
            renderIcon = nodejs;
            break;
          case 'html5':
            renderIcon = html5;
            break;
          case 'js':
            renderIcon = js;
            break;
          case 'java':
            renderIcon = java;
            break;
          case 'angular':
            renderIcon = angular;
            break;
          case 'sql':
            renderIcon = sql;
            break;
          case 'react':
            renderIcon = react;
            break;
          case 'spring':
            renderIcon = spring;
            break;
          case 'mybatis':
            renderIcon = mybatis;
            break;
          default:
            renderIcon = js;
        }
        return (
          <div key={index} className="icon-wrapper">
            <div>
              <img
                className="skill-logo"
                title={icon}
                src={renderIcon}
                key={index}
                alt="icon"
              />
            </div>
            <div key={index} className="tech-name">
              {icon}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconArray;
