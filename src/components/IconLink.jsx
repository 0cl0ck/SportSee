import React from "react";

function IconLink({ img, url, label }) {
  return (
    <a href={url} className="icon-link" aria-label={label}>
      <img src={img} alt={label} />
    </a>
  );
}

export default IconLink;
