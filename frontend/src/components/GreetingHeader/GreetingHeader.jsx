import React from "react";
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

export default GreetingHeader;
