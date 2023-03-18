import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Test");
  };
  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Giriş Yap</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Hesabına Giriş Yap
        </p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="E-posta"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Parola"
              name="password"
              minLength="8"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Giriş Yap" />
          <p className="my-1">
            Hesabın yok mu ? <Link to="/register">Kayıt Ol</Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Login;
