import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
