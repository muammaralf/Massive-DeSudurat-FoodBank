import React from "react";
import "./testimoni.css";

const Testimoni = ({ coment, name, pictureProfile }) => {
  return (
    <>
      <div className="container-testimoni">
        <p>{coment}</p>
        <div className="container-profile">
          <img src={pictureProfile} alt="#" />
          <span>{name}</span>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
