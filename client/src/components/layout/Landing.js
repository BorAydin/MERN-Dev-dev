import React from "react";

const Landing = () => {
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
            <a href="register.html" className="btn btn-primary">
              Kayıt Ol
            </a>
            <a href="login.html" className="btn btn-light">
              Giriş Yap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
