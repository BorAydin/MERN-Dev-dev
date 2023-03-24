import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import profile from "../../reducers/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

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
          <>Hey</>
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
