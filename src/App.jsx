import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "./components";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/restaurants" exact element={<Restaurant />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
