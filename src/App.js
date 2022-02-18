import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/checkout" element={<h1>Checkout</h1>} />
          <Route exact path="/login" element={<Header />} />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
