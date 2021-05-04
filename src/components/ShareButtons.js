import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function ShareButtons() {
  return (
    <div className="share-buttons-wrapper">
      <div className="icons linkedin-icon">
        <a
          href="https://www.linkedin.com/in/aswin-antony-wilson/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="icons github-icon">
        <a
          href="https://github.com/aswinwilson?tab=repositories"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="icons envelope-icon">
        <a href="mailto:aswinantonywilson@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="icons twitter-icon">
        <a href="https://twitter.com/aswin_wilson" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default ShareButtons;
