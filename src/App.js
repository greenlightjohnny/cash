import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Eventpage from "./pages/Event";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage}></Route>
      <Route path="/event/:id" component={Eventpage}></Route>
    </Router>
  );
}

export default App;
