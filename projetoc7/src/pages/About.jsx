import React, { useState } from "react";
import Collapsis from "../composant/Collapsis";
import colapsJson from "../data/colaps.json";
import BannerApropos from "../composant/BannerApropos";

const About = () => {
  return (
    <div className="about">
      <BannerApropos />
      {colapsJson.map((colaps, index) => (
        <Collapsis key={index} index={index} title={colaps.title}>
          {colaps.text}
        </Collapsis>
      ))}
    </div>
  );
};

export default About;
