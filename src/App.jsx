import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router,Routes,Redirect, Route,Navigate } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import { Routes } from "react-router";
import { Route } from "react-router";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />}></Route>
    </Routes>
    worrrrrrrrrrrrrrrrrrrrrrr
  );
}

export default App;
