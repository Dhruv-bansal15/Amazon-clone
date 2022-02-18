import React from "react"
import './App.css';
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Header from "./Header";


function App() {
  return (
    <Router> 
      <div className="app">
        <Routes>
          <Route exact path="/checkout" element={<h1>Checkout</h1>}/>
          <Route exact path="/login" element={<h1>login page</h1>}/>
          <Route exact path="/" element={<Header/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
