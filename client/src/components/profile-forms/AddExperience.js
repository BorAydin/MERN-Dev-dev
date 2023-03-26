import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const navigate = useNavigate();

  const { title, company, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Deneyim Ekle</h1>
        <p className="lead">
          <i className="fas fa-code-branch"></i> Geçmişte çalıştığın
          pozisyonları ekleyebilirsin.
        </p>
        <small>* = Doldurulması gereken alanlar.</small>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            addExperience(formData);
            navigate("/dashboard");
          }}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="* Ünvan"
              name="title"
              value={title}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Şirket"
              name="company"
              value={company}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Konum"
              name="location"
              value={location}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <h4>Başlangıç Tarihi</h4>
            <input
              type="date"
              name="from"
              value={from}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <p>
              <input
                type="checkbox"
                name="current"
                checked={current}
                value={current}
                onChange={(e) => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
              />{" "}
              Hala çalışıyor musunuz ?
            </p>
          </div>
          <div className="form-group">
            <h4>Bitiş Tarihi</h4>
            <input
              type="date"
              name="to"
              value={to}
              onChange={(e) => onChange(e)}
              disabled={toDateDisabled ? "disabled" : ""}
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Tanımlamalar..."
              value={description}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input type="submit" className="btn btn-primary my-1" />
          <Link to="/dashboard" className="btn btn-light my-1">
            {" "}
            Geri Dön{" "}
          </Link>
        </form>
      </section>
    </>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
