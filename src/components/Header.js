import React from "react";
import laptop from "../images/laptop.png";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Header = () => {
  return (
    <div className="container">
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#005496",
            },
            line_linked: {
              color: "#f44242",
              opacity: 0.3,
            },
          },
        }}
      />
      <div className="header-wrapper">
        {/* <div className="main-info">Web developement ongoininga</div> */}
        <div className="laptop-image-wrapper">
          <img src={laptop} alt="Laptop" className="laptop-image"></img>
          <Typed
            loop
            typeSpeed={25}
            backSpeed={5}
            strings={[
              '<p>"name": "Aswin Antony Wilson",</p><p>"role": "Software Developer &#9829;",</p><p>"location": "Ontario, Canada",</p><p>"relocatable": true</p>',
            ]}
            className="typed-content"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
