import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, to, from, description },
}) => (
  <div>
    <h3 className="text-dark">{school}</h3>
    <p>
      <Moment format="DD/MM/YYYY">{from}</Moment> -{" "}
      {!to ? " Günümüz " : <Moment format="DD/MM/YYYY">{to}</Moment>}
    </p>
    <p>
      <strong>Lisans: </strong> {degree}
    </p>
    <p>
      <strong>Alan: </strong> {fieldofstudy}
    </p>
    <p>
      <strong>Tanımlama: </strong> {description}
    </p>
  </div>
);
ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
