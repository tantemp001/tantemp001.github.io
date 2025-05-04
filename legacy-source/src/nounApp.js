import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import { NounGamePage } from "./component/noungame";
import { PageCommon } from "./component/pagecommon";

function NounApp() {
  return (
    <div>
      <div>
        <PageCommon></PageCommon>
          <Routes>
            <Route path="/" element={<NounGamePage />} />
            <Route path="*" element={<NounGamePage />} />
          </Routes>
      </div>
    </div>
  );
}

export default NounApp;
