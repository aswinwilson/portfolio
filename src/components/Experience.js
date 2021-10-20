import React from "react";
import CarZiplogix from '../images/Lone-Wolf-zipLogix.jpg';
import R7Winfield from '../images/r7tool_winfield.png';
import Radian from '../images/radian.png';
import CommercialShop from '../images/bb1.jpeg';
import Questionaire from '../images/quest2.jpeg';
import VaccineOne from '../images/vaccine1.jpeg';
import { Carousel } from 'react-carousel-minimal';

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
            <div className="experience-img-wrapper py-3">
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
            <div className="experience-img-wrapper py-3">
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
            <div className="experience-img-wrapper py-3">
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

        <div className="row">
          <div className="col-sm-4">
            <div className="experience-img-wrapper py-3">
              <img src={CommercialShop} alt="CommercialShop" />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="experience-info-wrapper">
              <h4>Commercial Shopping Application</h4>
              <h5>Junior Software Developer</h5>
              <p>Worked on a equipment’s selling platform, developed the front end in react js to show the product
                information by consuming an API having all the product catalog information.
                Also developed the product catalog database using MongoDB and axios for api creation with node js
                and deployed in an amazon ec2 instance..</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="experience-img-wrapper py-3">
              <img src={Questionaire} alt="Questionaire" />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="experience-info-wrapper">
              <h4>Project for performing Quiz</h4>
              <h5>Junior Software Developer</h5>
              <p>Using dot net mvc core, created a quiz program, which allows users to test their knowledge in a topic of
                choice by taking a quiz. The result of each quiz and number of attempts being persisted in database
                (SQL Server).</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="experience-img-wrapper py-3">
              <img src={VaccineOne} alt="VaccineOne" />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="experience-info-wrapper">
              <h4>Project for Vaccination Registration Info</h4>
              <h5>Junior Software Developer</h5>
              <p>Designed and developed the web application with MVC architecture using Spring Framework.
                Developed handy version applications using Bootstrap Framework, HTML5 and CSS3. User provides
                basic information to register for vaccination. All registrations can be searched and modified. Have used
                hibernate framework for data persistence, involved in creating the Hibernate POJO Objects and mapped
                using Hibernate annotations for data persistence. Planning, task division, and prioritizing work in team
                by using JIRA.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
