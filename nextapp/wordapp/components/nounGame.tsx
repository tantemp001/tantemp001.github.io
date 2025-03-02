import React from "react";

import SingleWord from "./singleWord";
import { getAllWords } from "@/lib/fetchDataHooks";
import { Noun, Translation } from "@/lib/schema";

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
          const nouns: Noun[] = []
          for (const w of x) {
            if ( "translations" in w ){
                for ( const t of w["translations"]) {
                    if ( t["word_type"] == "noun") {
                        const translation = new Translation("noun", t.gender, t.sentences, t.meanings);
                        const thisNoun = new Noun(w.word, t.gender, translation);
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

    // const reloadNextNoun = () => {
    //   setCurrentWord(allNouns[Math.floor(Math.random() * allNouns.length)]);
    // }

    return (
      <>{currentWord&&<SingleWord thisWord={currentWord!} expanded={true} gender={currentWord!.gender}></SingleWord>}</>);
  };