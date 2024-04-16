import React from "react";
import Header from "./Header/Header.jsx";
import Aside from "./Aside/Aside.jsx";
import Main from "../pages/Main.jsx";
import { Outlet } from "react-router-dom";

/**
 * Layout est un composant fonctionnel qui sert de mise en page générale pour l'application.
 * Il organise visuellement l'interface utilisateur en trois sections principales :
 * - Header pour l'en-tête de l'application.
 * - Aside pour le panneau latéral qui peut contenir des liens de navigation ou d'autres outils.
 * - Main qui est le conteneur principal pour le contenu de la page, intégrant l'élément <Outlet> de React Router.
 *
 * <Outlet /> est utilisé ici pour injecter des composants enfants au sein de la balise <Main>, ce qui permet
 * une flexibilité dans la définition des routes spécifiques à des composants dans le cadre d'une application à page unique (SPA).
 */

const Layout = () => (
  <>
    <Header />
    <Aside />
    <Main>
      <Outlet />
    </Main>
  </>
);

export default Layout;
