import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"> Profili Düzenle</i>
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-primary"> Deneyim Ekle</i>
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-primary"> Eğitim Ekle</i>
      </Link>
    </div>
  );
};

export default DashboardActions;
