import React from "react";
import { HashRouter  as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import News from "./pages/News";
import Products from "./pages/Products";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="/Home"
          element={ <Home />}
        />
        <Route
          path="/Company"
          element={ <Company />}
        />
        <Route
          path="/News"
          element={ <News />}
        />
        <Route
          path="/Products"
          element={ <Products />}
        />
      </Routes>
    </Router>
  );
}

export default App;
