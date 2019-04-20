import React from "react";
import SocialIcons from "@components/SocialIcons";
import BrowserNotes from "@components/BrowserNotes";
import Title from "@components/Title";
import moment from "moment";

import "./style.scss";

const getDeveloperAge = () => {
  const startDate = moment([2016, 6, 22]);
  const today = moment();
  const differenceYears = today.diff(startDate, "years");
  startDate.add(differenceYears, "years");
  const differenceMonths = today.diff(startDate, "months");

  return `${differenceYears} Years and ${differenceMonths} months`;
};

const LandingPage = (props, context) => {
  const colorPrimary = "#000000";
  const bgPrimary = "#ffffff";

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Title />
      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="intro-wrapper">
          <div className="intro-text">
            Hello! My name is Dhruv, and I'm a Web Full-Stack Developer from
            India and currently living in Stockholm, Sweden. I have been
            associated with the web-development industry since{" "}
            {getDeveloperAge()}. I enjoy building solutions and have a keen
            interest in creating effective User Experience. I have a diverse set
            of skills ranging from HTML + CSS + Javascrpt + Angular + React +
            Redux, to deployment of Containerized Applications on Kubernetes.
          </div>
          <div className="intro-image">
            {/* <img src="../../images/chrome.svg" alt="Chrome Dev Tools"/> */}
          </div>
          <SocialIcons />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
