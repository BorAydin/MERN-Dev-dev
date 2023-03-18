import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DEV-dev
        </Link>
      </h1>
      <ul>
        <li>
          <a href="!#">Yazılımcılar</a>
        </li>
        <li>
          <Link to="register">Kayıt Ol</Link>
        </li>
        <li>
          <Link to="login">Giriş Yap</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
