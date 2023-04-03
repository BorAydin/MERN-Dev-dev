import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";

const Education = ({ education }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td>
        <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
        {edu.to === null ? (
          " Günümüz "
        ) : (
          <Moment format="DD/MM/YYYY">{edu.to}</Moment>
        )}
      </td>
      <td>
        <button className="btn btn-danger">Sil</button>
      </td>
    </tr>
  ));

  return (
    <>
      <h2 className="my-2">Eğitim Bilgileri</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Okul</th>
            <th className="hide-sm">Derece</th>
            <th className="hide-sm">Yıllar</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default Education;
