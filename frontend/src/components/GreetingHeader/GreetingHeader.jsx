import React from "react";
import PropTypes from "prop-types";
import "../../sass/components/_greetingHeader.scss";

function GreetingHeader({ name }) {
  return (
    <header className="greeting-header">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}

GreetingHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GreetingHeader;
