import React from "react";

import { getAllWords } from "@/lib/fetchDataHooks";
import { Noun, Translation } from "@/lib/schema";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import SingleWord from "./singleWord";

export const NounGamePage = () => {
  const [allNouns, setAllNous] = React.useState<Noun[]>([]);
  const [currentWord, setCurrentWord] = React.useState<Noun>();

  React.useEffect(() => {
    //console.log("here" + JSON.stringify(allUsers));
    if (allNouns.length == 0) {
      //console.log("here2");
      getAllWords().then((x) => {
        x = x.allwords;
        console.log("here8:" + x.length);
        const nouns: Noun[] = [];
        for (const w of x) {
          if ("translations" in w) {
            for (const t of w["translations"]) {
              if (t["word_type"] == "noun") {
                const translation = new Translation(
                  "noun",
                  t.gender,
                  t.sentences,
                  t.meanings
                );
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

  const reloadNextNoun = () => {
    setCurrentWord(allNouns[Math.floor(Math.random() * allNouns.length)]);
  };

  return (
    <>
      <Grid size={{ md: 8, sm: 12 }} offset={{ md: 2 }}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid size={9}>
              <Button variant="contained" href="/">Home</Button>
            </Grid>
              <Grid size={3} sx={{ float: "right" }}>
                <Button variant="contained" onClick={reloadNextNoun}>
                  Next Noun
                </Button>
                
              </Grid>
              <Grid>
              {currentWord && (
                <SingleWord
                  thisWord={currentWord!}
                  expanded={true}
                  gender={currentWord!.gender}
                ></SingleWord>
              )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
