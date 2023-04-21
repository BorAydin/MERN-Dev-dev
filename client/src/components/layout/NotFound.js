import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle" /> Sayfa Bulunamadı.
      </h1>
      <p className="large">Ortada sayfa yok</p>
    </div>
  );
};

export default NotFound;
