import React from "react";

const Button = ({ TextButton }) => {
  return (
    <div>
      <button type="button" className="btn">
        {TextButton}
      </button>
    </div>
  );
};

export default Button;
