import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import NounApp from "./nounApp";

const root = createRoot(document.getElementById("nounroot"));
root.render(
  <Router>
    <NounApp />
  </Router>
);
