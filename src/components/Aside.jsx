import React from "react";
import IconLink from "./IconLink";
import "./Aside.scss";

function Aside() {
  return (
    <>
      <aside className="sidebar">
        <nav className="nav-menu">
          <IconLink
            className="nav-menu__yoga"
            img="yoga.png"
            url="/yoga"
            label="Yoga"
          />
          <IconLink
            className="nav-menu__swimming"
            img="swimming.png"
            url="/swimming"
            label="Swimming"
          />
          <IconLink
            className="nav-menu__cycling"
            img="cycling.png"
            url="/cycling"
            label="Cycling"
          />
          <IconLink
            className="nav-menu__lifting"
            img="lifting.png"
            url="/lifting"
            label="Lifting"
          />
        </nav>
        <p className="sidebar-footer">Copyright, SportSee 2020</p>
      </aside>
    </>
  );
}

export default Aside;
