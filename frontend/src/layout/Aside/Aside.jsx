import React from "react";
import IconLink from "./IconLink.jsx";
import "../../sass/layout/_aside.scss";

function Aside() {
  return (
    <>
      <aside className="sidebar">
        <nav className="nav-menu">
          <IconLink className="nav-menu__yoga" img="/yoga.png" label="Yoga" />
          <IconLink
            className="nav-menu__swimming"
            img="/swimming.png"
            label="Swimming"
          />
          <IconLink
            className="nav-menu__cycling"
            img="/cycling.png"
            label="Cycling"
          />
          <IconLink
            className="nav-menu__lifting"
            img="/lifting.png"
            label="Lifting"
          />
        </nav>
        <p className="sidebar-footer">Copyright, SportSee 2020</p>
      </aside>
    </>
  );
}

export default Aside;
