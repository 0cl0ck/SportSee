import React from "react";
import Navbar from "./layout/Header/Navbar.jsx";
import "./sass/global.scss";
import Aside from "./layout/Aside/Aside.jsx";
import Main from "./pages/Main.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Aside />
        <Main />
      </div>
    </>
  );
}

export default App;
