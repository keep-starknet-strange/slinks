import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import { paths } from "./resources/paths";

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Routes>
          <Route path={paths.home} element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
