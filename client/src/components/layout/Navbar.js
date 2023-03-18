import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html">
          <i className="fas fa-code"></i> DEV-dev
        </a>
      </h1>
      <ul>
        <li>
          <a href="profiles.html">Yazılımcılar</a>
        </li>
        <li>
          <a href="register.html">Kayıt Ol</a>
        </li>
        <li>
          <a href="login.html">Giriş Yap</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
