import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, location, to, from, description },
}) => (
  <div>
    <h3 className="text-dark">{company}</h3>
    <p>
      <Moment format="DD/MM/YYYY">{from}</Moment> -{" "}
      {!to ? " Günümüz " : <Moment format="DD/MM/YYYY">{to}</Moment>}
    </p>
    <p>
      <strong>Pozisyon: </strong> {title}
    </p>
    <p>
      <strong>Konum: </strong> {location}
    </p>
    <p>
      <strong>Tanımlama: </strong> {description}
    </p>
  </div>
);
ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
