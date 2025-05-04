import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import { RandomVerbsPage } from "./component/randomverbs";
import { PageCommon } from "./component/pagecommon";

function VerbApp() {
  return (
    <div>
      <div>
        <PageCommon></PageCommon>
          <Routes>
            <Route path="/" element={<RandomVerbsPage />} />
            <Route path="*" element={<RandomVerbsPage />} />
          </Routes>
      </div>
    </div>
  );
}

export default VerbApp;
