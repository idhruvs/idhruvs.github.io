import React from 'react';
import Page from '../Page';
import Contact from './Contact';
import Education from './Education';

import './style.scss';
import ProfExperience from './ProfExperience';
import Projects from './Projects';
import Skills from './Skills';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id;
    this.skills = [
      {
        name: 'Javascript',
        id: 'javascript',
        level: 90,
      },
      {
        name: 'JAVA 8',
        id: 'java',
        level: 30,
      },
      {
        name: 'Node.Js',
        id: 'nodejs',
        level: 80,
      },
      {
        name: 'Angular 2/4/6',
        id: 'angular',
        level: 60,
      },
      {
        name: 'HTML 5 AND CSS',
        id: 'htmlcss',
        level: 70,
      },
      {
        name: 'REACT',
        id: 'react',
        level: 50,
      },
      {
        name: 'SQL, MongoDB',
        id: 'sql',
        level: 60,
      },
      {
        name: 'Kubernetes, Docker',
        id: 'kubernetes',
        level: 60,
      },
    ];
  }
  render() {
    return (
      <Page singleMode={false} id={this.id}>
        <div className="resume-wrapper">
          {/* <div className="resume-header" /> */}
          <div className="resume-title">
            DHRUV SHAH
            <div className="resume-subtitle">SOFTWARE ENGINEER</div>
          </div>
          <div className="resume-content">
            <div className="left-content">
              <div className="resume-section">
                <div className="resume-section-title">Contact</div>
                <div className="horizontal-line" />
                <div className="resume-section-content">
                  <Contact />
                </div>
              </div>
              <div className="resume-section">
                <div className="resume-section-title">Skills</div>
                <div className="horizontal-line" />
                <div className="resume-section-content">
                  <Skills skills={this.skills} />
                </div>
              </div>
              <div className="resume-section">
                <div className="resume-section-title">Education</div>
                <div className="horizontal-line" />
                <div className="resume-section-content">
                  <Education />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="resume-section">
                <div className="resume-section-title">
                  Professional Experience
                </div>
                <div className="horizontal-line" />
                <div className="resume-section-content">
                  <ProfExperience />
                </div>
              </div>
              <div className="resume-section">
                <div className="resume-section-title">Projects</div>
                <div className="horizontal-line" />
                <div className="resume-section-content">
                  <Projects />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
