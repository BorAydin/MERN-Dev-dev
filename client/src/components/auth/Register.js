import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Parolalar eşleşmiyor.");
    } else {
      console.log(formData);
    }
  };

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Kayıt Ol</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Hesap Oluştur
        </p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="İsim"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
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
              minLength="6"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Parola Doğrulama."
              name="password2"
              minLength="6"
              value={password2}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Kayıt Ol" />
          <p className="my-1">
            Hesabın var mı ? <a href="login.html">Giriş Yap</a>
          </p>
        </form>
      </section>
    </>
  );
};

export default Register;
