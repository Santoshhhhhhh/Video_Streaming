/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ className, text = "Wanda Vision" }) => {
  return (
    <div className={`component ${className}`}>
      <div className="overlap-group">
        <div className="wanda-vision">{text}</div>
      </div>
    </div>
  );
};

Component.propTypes = {
  text: PropTypes.string,
};
