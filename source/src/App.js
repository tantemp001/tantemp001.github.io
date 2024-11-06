import React from "react";
import { Routes, Route } from "react-router-dom";
import { RandomWordsPage } from "./component/randomwords";

import "./index.css";

function App() {
  return (
    <div>
      <div>
          <Routes>
            <Route path="/" element={<RandomWordsPage />} />
            <Route path="*" element={<RandomWordsPage />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
