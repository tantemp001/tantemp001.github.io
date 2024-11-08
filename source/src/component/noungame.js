import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';

import { SingleWord } from "./singleword";
import * as apiUtils from "../felogic/apicalls";

export const NounGamePage = (props) => {
    const [allNouns, setAllNous] = React.useState([]);
    const [currentWord, setCurrentWord] = React.useState();
    const genderColor = {"neuter" : "yellow", "masculine" : "cyan", "feminine": "pink"}
    const genderArticle = {"neuter" : "das", "masculine" : "der", "feminine": "die"}

    React.useEffect(() => {
      //console.log("here" + JSON.stringify(allUsers));
      if (allNouns.length == 0) {
        //console.log("here2");
        apiUtils.getAllWords().then((x) => {
          x=x.allwords
          console.log("here8:" + x.length);
          let nouns = []
          let thisNoun = {}
          for (let w of x) {
            if ( "translations" in w ){
                for ( let t of w["translations"]) {
                    if ( t["word_type"] == "noun") {
                        thisNoun = { "word" : w.word, "gender" : t.gender, "meanings" : t.meanings, "sentences": t.sentences };
                        nouns.push(thisNoun);
                    }
                }
            }
          }
          //console.log("here8:" + JSON.stringify(nouns));
          setAllNous(nouns);
          setCurrentWord(nouns[Math.floor(Math.random() * nouns.length)]);
          console.log("here8:" + JSON.stringify(currentWord));
        });
      }
    }, []);

    console.log("here8:" + JSON.stringify(currentWord));


    return (
      <div class="flex flex-wrap justify-content-center">
        <Panel
          header="Noun Practice"
          className="w-8"
        >
          <div>
      {currentWord && (
        <>
          <div class="flex flex-wrap">
            <h1 style={{color: genderColor[currentWord.gender]}}>{currentWord["word"]}</h1>
            <p>{genderArticle[currentWord.gender]}</p>
          </div>

          <Divider type="dashed"></Divider>
          <div class="flex flex-row flex-wrap justify-content-start">
              <div class="w-2"><strong>Meaning: </strong></div>
              <div class="flex flex-wrap justify-content-evenly">
              {
                currentWord['meanings'] && currentWord['meanings'].map((m) => (<p class="p-2 m-2">{m}</p>))
              }
              </div>
          </div>

          <Divider type="dashed"></Divider>
          <div class="flex flex-wrap justify-content-start">
            <div className="w-2"><strong>Translations: </strong></div>
            <div>
              {
                currentWord['sentences'].map((sentence) => (
                <div class="flex flex-wrap flex-column p-1">
                  <p>{sentence[0]}</p>
                  <br/>
                  <p class="text-primary">{sentence[1]}</p>
                  <Divider type="dotted"></Divider>
                </div>))
              }
            </div>
          </div>
        </>

      )}
    </div>
        </Panel>
      </div>
    );
  };