import React from "react";
import { Routes, Route } from "react-router-dom";
import { RandomWordsPage } from "./component/randomwords";

import "./index.css";
import { NounGamePage } from "./component/noungame";
import {RandomVerbsPage} from "./component/randomverbs";
import { PageCommon } from "./component/pagecommon";

function App() {
  return (
    <div>
      <div>
          <PageCommon></PageCommon>
          <Routes>
            <Route path="/nouns" element={<NounGamePage />} />
            <Route path="/verbs" element={<RandomVerbsPage />} />
            <Route path="/" element={<RandomWordsPage />} />
            <Route path="*" element={<RandomWordsPage />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
