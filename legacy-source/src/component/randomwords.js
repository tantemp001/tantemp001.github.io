import React from "react";

import { Button } from "primereact/button";
import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';

import { SingleWord } from "./singleword";
import * as apiUtils from "../felogic/apicalls";

export const RandomWordsPage = (props) => {
    const [allWords, setAllWords] = React.useState([]);
    const [currentBatchWords, setCurrentBatchWords] = React.useState([]);

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
          //console.log("herxe8:" + JSON.stringify(selected));
          setAllWords(x);
          setCurrentBatchWords(selected);
        });
      }
    }, []);

    const reloadBatchWords = () => {
      let selected = []
      for (let i=0; i<10; i++) {
        selected.push(allWords[Math.floor(Math.random() * allWords.length)])
      }
      //console.log("here9:" + JSON.stringify(selected));
      setCurrentBatchWords(selected);
    }

    return (
      <div className="flex flex-wrap justify-content-center">
        <Panel
          header="All Random Words"
          className="w-8"
        >
          <div className="flex flex-wrap justify-content-end">
            <Button
              label="Next Batch"
              severity="help" 
              onClick={reloadBatchWords}
            ></Button>
            <Divider></Divider>
          </div>
          {currentBatchWords.map((word, i) => (
            <SingleWord key={word.word} thisWord={word}></SingleWord>
          ))}
        </Panel>
      </div>
    );
  };