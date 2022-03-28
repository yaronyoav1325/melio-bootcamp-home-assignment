import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Favorites, Home, routes} from "./pages";
import "./App.css";
import { Card } from "./components/Card/Card.jsx";

/*
  This is the entry point of the application, the magic starts here
  The Navbar Component is responsible for the Top Menu links
  The Routes Component is responsible to display a different page Component for each route path displayed in the url
*/

const App = () => {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={routes.home}
              element={<Home/>}>
        </Route>
        <Route path={routes.favorites}
              element={<Favorites/>}>
        </Route>     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
