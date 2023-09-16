import React from "react";
import { HashRouter  as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import News from "./pages/News";
import Products from "./pages/Products";
import NewsItem from "./pages/NewsItem";
import Speak from "./pages/Speak";
import Events from "./pages/Events";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DrawerPage from "./pages/DrawerPage";

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
        <Route
          path="/NewsItem"
          element={ <NewsItem />}
        />
        <Route
          path="/Speak"
          element={ <Speak />}
        />
        <Route
          path="/Events"
          element={ <Events />}
        />
        <Route
          path="/Login"
          element={ <Login />}
        />
        <Route
          path="/SignUp"
          element={ <SignUp />}
        />
        <Route
          path="/DrawerPage"
          element={ <DrawerPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
