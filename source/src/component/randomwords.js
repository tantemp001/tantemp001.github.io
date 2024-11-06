import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';

import { SingleWord } from "./singleword";
import * as apiUtils from "../felogic/apicalls";

export const RandomWordsPage = (props) => {
    const [allWords, setAllWords] = React.useState([]);

    React.useEffect(() => {
      //console.log("here" + JSON.stringify(allUsers));
      if (allWords.length == 0) {
        //console.log("here2");
        apiUtils.getAllWords().then((x) => {
          x=x.allwords
          console.log("here8:" + x.length);
          let selected = []
          for (let i=0; i<10; i++) {
            selected.push(x[Math.floor(Math.random() * x.length)])
          }
          console.log("here8:" + JSON.stringify(selected));
          setAllWords(selected);
        });
      }
    });

    return (
      <div class="flex flex-wrap justify-content-center">
        <Panel
          header="All Random Words"
          className="w-8"
        >
          {allWords.map((word, i) => (
            <SingleWord key={word.word} thisWord={word}></SingleWord>
          ))}
        </Panel>
      </div>
    );
  };