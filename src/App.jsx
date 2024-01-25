import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./global.scss";
import Aside from "./components/Aside.jsx";
import Main from "./components/Main.jsx";

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
