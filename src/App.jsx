import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Restaurant from "./pages/Restaurant";
import { LandingPage } from "./pages/LandingPage";
import Arrangement from "./pages/Arrangement";
function App() {
  return (

    <div>
      <Navbar />
      <Routes>
      <Route path="/" exact element={<LandingPage />} />
        <Route path="/gallery" exact element={<Homepage />} />
        <Route path="/restaurants" exact element={<Restaurant />} />
        <Route path="/arrangement" exact element={<Arrangement />} />
         
      
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
