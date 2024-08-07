import { useState } from "react";
import svgFleche from "../assets/images/arrowLeft.svg";
import PropTypes from "prop-types";

const Collapsis = (props) => {
  const { title, children } = props;
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`colapsis ${isVisible ? "visible" : ""}`}>
      <div className="headColapsis" onClick={handleToggle}>
        <h3>{title}</h3>

        <img
          src={svgFleche}
          alt="flèche"
          className={`arrow ${isVisible ? "down" : ""}`}
        />
      </div>
      <div className={`paragraph ${isVisible ? "animate" : ""}`}>
        {children}
      </div>
    </div>
  );
};

Collapsis.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapsis;
