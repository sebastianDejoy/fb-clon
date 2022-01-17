import React from "react";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
