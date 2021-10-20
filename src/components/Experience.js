import React from "react";
import CarZiplogix from '../images/Lone-Wolf-zipLogix.jpg';
import R7Winfield from '../images/r7tool_winfield.png'
import Radian from '../images/radian.png'

const Experience = () => {
  return (
    <div className="experience-wrapper" id="experience">
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12">
            <h3>Experience</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="experience-img-wrapper">
              <img src={CarZiplogix} alt="Car Ziplogix (all copyrights reserved to Lone Wolf)" />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="experience-info-wrapper">
              <h4>CAR Ziplogix (California Associates of Realtors)</h4>
              <h5>User Interface Engineer @ Tavant Technologies</h5>
              <p>zipForm Plus was designed from the ground up specifically for today’s agents and brokers. This is a real
                estate application, maximizing workflow efficiency while reducing risk related to mortgage.
                Responsibilities included Front end development in Backbone.js based on MVC architecture, while
                utilizing the power of underscore.js, require.js, and jQuery. API integration and mapping backend data
                to the front end. Creation of pixel perfect and responsive screens with cross-browser compatibility
                using bootstrap 3. Adding accessibility and supporting multiple foreign languages.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="experience-img-wrapper">
              <img className="w-75" src={R7Winfield} alt="R7 Tool by Winfield United" />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="experience-info-wrapper">
              <h4>R7 Tool by Winfield United</h4>
              <h5>User Interface Engineer @ Tavant Technologies</h5>
              <p>It is an industry-leading decision agriculture solution that provides unbiased product performance,
                information, and critical field data to help farmers optimize ROI potential.
                Front development was based on the framework Angular 7 environment, SCSS. Pixel perfect
                development based on the UX designs was the primary motive, along with the development of reusable
                components, while making sure data populates as per the expectation with the use of unit testing.
                A majority of bug fixes were performed during the migration from Angular 4 to Angular 7. Daily stand
                up and occasional client meetings were held, to keep track of the work.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="experience-img-wrapper">
              <img src={Radian} alt="Radian" />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="experience-info-wrapper">
              <h4>Radian</h4>
              <h5>User Interface Engineer @ Tavant Technologies</h5>
              <p>It has a comprehensive resource across mortgage and real estate services, powered by data, analytics,
                and insights.Front end development was based on library React.js, with material UI. Look and feel was given high
                priority to match with the UX Design provided with the Style guide. Reusable react components were
                created in storybook. Jira was used for the user stories and bug lists. Client interactions and daily stand
                up helped in synching tasks with teammates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
