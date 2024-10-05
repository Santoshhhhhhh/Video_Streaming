
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
