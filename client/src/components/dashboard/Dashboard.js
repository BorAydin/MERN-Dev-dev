import React, { useEffect } from "react";
import { getCurrentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import profile from "../../reducers/profile";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <>
      <div className="container">
        <h1 className="large text-primary">Gösterge Paneli</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Hoşgeldin {user && user.name}
        </p>
        {profile !== null ? (
          <>
            <DashboardActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
          </>
        ) : (
          <>
            <p>Profil oluşturmamışsın. Lütfen oluştur.</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Profil Oluşturma
            </Link>
          </>
        )}
      </div>
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
