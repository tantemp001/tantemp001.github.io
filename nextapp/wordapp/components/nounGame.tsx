import React from "react";

import SingleWord from "./singleWord";
import { getAllWords } from "@/lib/fetchDataHooks";
import { Noun, Translation, Word } from "@/lib/schema";

export const NounGamePage = () => {
    const [allNouns, setAllNous] = React.useState<Noun[]>([]);
    const [currentWord, setCurrentWord] = React.useState<Noun>();
    
    React.useEffect(() => {
      //console.log("here" + JSON.stringify(allUsers));
      if (allNouns.length == 0) {
        //console.log("here2");
        getAllWords().then((x) => {
          x=x.allwords
          console.log("here8:" + x.length);
          let nouns: Noun[] = []
          for (let w of x) {
            if ( "translations" in w ){
                for ( let t of w["translations"]) {
                    if ( t["word_type"] == "noun") {
                        let translation = new Translation("noun", t.gender, t.sentences, t.meanings);
                        let thisNoun = new Noun(w.word, t.gender, translation);
                        nouns.push(thisNoun);
                        break;
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

    const reloadNextNoun = () => {
      setCurrentWord(allNouns[Math.floor(Math.random() * allNouns.length)]);
    }

    return (
      <>{currentWord&&<SingleWord thisWord={currentWord!} expanded={true} gender={currentWord!.gender}></SingleWord>}</>);
  };