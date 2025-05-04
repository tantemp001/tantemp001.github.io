import React from "react";

import { Button } from "primereact/button";
import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import * as apiUtils from "../felogic/apicalls";

export const RandomVerbsPage = (props) => {
    const [allWords, setAllWords] = React.useState([]);
    const [currentBatchWords, setCurrentBatchWords] = React.useState([]);

    React.useEffect(() => {
      //console.log("here" + JSON.stringify(allUsers));
      if (allWords.length == 0) {
        //console.log("here2");
        apiUtils.getAllVerbs().then((xx) => {
          let x=[]
          for (let w of xx) {
            x.push({"infinitive": w[0], "meaning": w[1], "present": w[2], "prefect": w[3], "participle": w[4] })
          }
          //console.log("here8:" + x.length);
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
          header="All Random Verbs"
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
          <DataTable value={currentBatchWords} showGridlines stripedRows tableStyle={{ minWidth: '50rem' }}>
            <Column field="infinitive" header="Infinitive"></Column>
            <Column field="meaning" header="Meaning"></Column>
            <Column field="present" header="Present Tense"></Column>
            <Column field="prefect" header="Imperfect Tense"></Column>
            <Column field="participle" header="Participle"></Column>
        </DataTable>
        </Panel>
      </div>
    );
  };