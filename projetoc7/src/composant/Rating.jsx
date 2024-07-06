import PropTypes from "prop-types";
import starFull from "../assets/images/starFull.svg";
import starEmpty from "../assets/images/starGrey.svg";

const Rating = ({ rating }) => {
  const totalStars = 5;
  let stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < rating) {
      stars.push(
        <img className="stars" key={i} src={starFull} alt="Full Star" />
      );
    } else {
      stars.push(
        <img className="starsGrey" key={i} src={starEmpty} alt="Empty Star" />
      );
    }
  }

  return <>{stars}</>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
