import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";

const Experience = ({ experience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          " Günümüz "
        ) : (
          <Moment format="DD/MM/YYYY">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button className="btn btn-danger">Sil</button>
      </td>
    </tr>
  ));

  return (
    <>
      <h2 className="my-2">Deneyim Bilgileri</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Şirket</th>
            <th className="hide-sm">Ünvan</th>
            <th className="hide-sm">Yıllar</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Experience;
