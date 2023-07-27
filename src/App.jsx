import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Restaurant from "./pages/Restaurant";
import { LandingPage } from "./pages/LandingPage";
// import Arrangement from "./pages/Arrangement";
import Reservation from "./pages/Reservation";
import { Modal } from "./pages/Modal";
import NotFound from "./components/NotFound";
import seatingModal from "./components/modal/SeatingModal"
import Arrangement from "./pages/Arrangement";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/gallery" exact element={<Homepage />} />
        <Route path="/gallery/restaurants" exact element={<Restaurant />} />

       
        <Route
          path="/gallery/restaurants/reservation"
          exact
          element={<Reservation />}
          
        />
         <Route
          path="/seating"
          exact
          element={<Arrangement />}
        />
        {/* <Route
          path="/reservation/arrangement"
          exact
          element={<Arrangement />}
        /> */}
        <Route path="/arrangement/success"
         exact element={<Modal />} />

        <Route path="*" exact element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
