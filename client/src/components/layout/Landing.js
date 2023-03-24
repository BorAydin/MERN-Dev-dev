import React from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">DEV-dev</h1>
          <p className="lead">
            Yazılımcı profili oluşturunca, gönderi oluşturabilir ve diğer
            yazılımcılara yardım edebilirsin.
          </p>
          <div className="buttons">
            <Link to="register" className="btn btn-primary">
              Kayıt Ol
            </Link>
            <Link to="login" className="btn btn-light">
              Giriş Yap
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
