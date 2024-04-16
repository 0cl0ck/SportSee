import React from "react";
import PropTypes from "prop-types";

function IconLink({ img, label }) {
  return (
    <a href="/" className="icon-link" aria-label={label}>
      <img src={img} alt={label} />
    </a>
  );
}

IconLink.propTypes = {
  img: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default IconLink;
