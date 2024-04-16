import React from "react";
import PropTypes from "prop-types";

/**
 * Composant Main qui enveloppe les enfants avec un élément <main>.
 * Il sert généralement de conteneur principal pour le contenu d'une page spécifique.
 *
 * @param {React.ReactNode} children - Les éléments enfants qui seront rendus à l'intérieur du <main>.
 * Cela permet d'encapsuler divers composants ou éléments JSX passés comme enfants.
 *
 * @returns {JSX.Element} Un élément <main> avec la classe CSS 'main' contenant les enfants passés.
 */
function Main({ children }) {
  return <main className="main">{children}</main>;
}

// PropTypes pour le composant Main
Main.propTypes = {
  children: PropTypes.node, // Peut être n'importe quel nœud enfant acceptable par React, comme des éléments HTML, des composants React, ou même du texte.
};

export default Main;
