import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import VerbApp from "./verbApp";

const root = createRoot(document.getElementById("verbroot"));
root.render(
  <Router>
    <VerbApp />
  </Router>
);
