import React from 'react';
import IconArray from '@components/IconArray';
import './style.scss';

const Projects = () => (
  <div>
    <div className="text-section">
      <div className="wrapper">
        <div className="title">
          DATA BROKERING PLATFORM (IOT BASED SOLUTION)
        </div>
        <div className="content">
          Data Brokering Platform for DriveSweden is a collaborative platform
          where developers and different smart-services providers can
          collaborate to create a market place for exchanging Data through APIs
          and Data Streams for solving the current problems in in the Transport
          and Smart Driving sector of Sweden.
        </div>
      </div>
      <div className="content">
        <ul>
          <li>
            Developed scalable code base for UI in Angular 6 and backend
            services in NodeJS.
          </li>
          <li>
            Developed multiple node-modules that are being used across
            applications.
          </li>
          <li>
            Proposed and developed real-time data integration of devices on Map
            UI.
          </li>
          <li>
            Contributed in deployments of containerized applications over
            Kubernetes.
          </li>
          <li>Performed code-reviews and improved quality of delivery.</li>
          <li>
            Contributed in Sprint Planning and Story Creation for various
            requirements.
          </li>
          <li>Headed the team for creating multiple marketing demos.</li>
        </ul>
      </div>
      <div className="icon-array">
        <IconArray
          iconList={['angular', 'html5', 'javascript', 'sql', 'kubernetes']}
        />
      </div>
    </div>

    <div className="text-section">
      <div className="wrapper">
        <div className="title">
          NETWORK INCIDENTS REPORTING TOOL (NEAR REALTIME)
        </div>
        <div className="content">
          Network Incidents and Reporting Tracker is a smart and visualization
          intensive tool for tracking network incidents for a network and
          telecom operations team. It is integrated with a database that injects
          near-real time data of predictions according to network incidents.
        </div>
      </div>
      <div className="content">
        <ul>
          <li>Development of the multiple modules for data representation.</li>
          <li>
            Developed REST based web services to integrate with third-party
            APIs.
          </li>
          <li>Responsible for deployment of the product.</li>
          <li>Deployed the setup in a containerized environment.</li>
        </ul>
      </div>
      <div className="icon-array">
        <IconArray iconList={['nodejs', 'angular', 'html5', 'js', 'sql']} />
      </div>
    </div>

    <div className="text-section">
      <div className="wrapper">
        <div className="title">MOBILE APPLICATION FOR BANKING SERVICES</div>
        <div className="content">
          A hybrid mobile application developed with a purpose to migrate a
          range of banking services offered by a leading UK Based Bank over a
          Mobile Application to increase engagement with the new generation
          banking customers. This application was created as a part of a
          proposal by the pre-sales team for exhibiting possibilities and
          capabilities.
        </div>
      </div>
      <div className="content">
        <ul>
          <li>Developed the full mobile application in Ionic</li>
          <li>Created backend services in NodeJS, LUIS Integration Suit.</li>
          <li>
            Integrated with third-party API services like Zillow and Four
            Square.
          </li>
        </ul>
      </div>
      <div className="icon-array">
        <IconArray iconList={['java', 'html5', 'spring', 'sql']} />
      </div>
    </div>

    <div className="text-section">
      <div className="wrapper">
        <div className="title">GLOBAL ASSET TRACKING TOOL</div>
        <div className="content">
          Asset tracking tool is a data-visualization toll with intensive chart
          representations developed with a purpose to replace boring bar-charts
          and pie charts with custom visualizations developed using ECharts and
          JavaScript. This application was used in Large Screen Displays at
          various offices of the customer.
        </div>
      </div>
      <div className="content">
        <ul>
          <li>Developed all the UI modules for data-representation.</li>
          <li>
            Developed REST based web-services and created Auth and Login
            Modules.
          </li>
          <li>Created data integration module for ElasticSearch database.</li>
        </ul>
      </div>
      <div className="icon-array">
        <IconArray iconList={['java', 'spring', 'sql']} />
      </div>
    </div>
  </div>
);

export default Projects;
