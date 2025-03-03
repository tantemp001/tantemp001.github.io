import React from "react";

import { getAllWords } from "@/lib/fetchDataHooks";
import { Word } from "@/lib/schema";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import SingleWord from "./singleWord";

export const RandomWordsPage = () => {
  const [allWords, setAllWords] = React.useState<Word[]>([]);
  const [currentBatchWords, setCurrentBatchWords] = React.useState<Word[]>([]);

  React.useEffect(() => {
    //console.log("here" + JSON.stringify(allUsers));
    if (allWords.length == 0) {
      //console.log("here2");
      getAllWords().then((x) => {
        x = x.allwords;
        //console.log("here8:" + x.length);
        const selected: Word[] = [];
        for (let i = 0; i < 10; i++) {
          selected.push(x[Math.floor(Math.random() * x.length)]);
        }
        //console.log("herxe8:" + JSON.stringify(selected));
        setAllWords(x);
        setCurrentBatchWords(selected);
      });
    }
  }, []);

  const reloadBatchWords = () => {
    const selected = [];
    for (let i = 0; i < 10; i++) {
      selected.push(allWords[Math.floor(Math.random() * allWords.length)]);
    }
    //console.log("here9:" + JSON.stringify(selected));
    setCurrentBatchWords(selected);
  };

  return (
    <Grid size={{ md: 8, sm: 12 }} offset={{ md: 2 }}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid size={9}>
              <Typography variant="h2">All Random Words</Typography>
            </Grid>
            <Grid size={3}>
              <Button variant="contained" href="/nouns" sx={{ m: 2 }}>
                Noun
              </Button>
              <Button
                variant="contained"
                onClick={reloadBatchWords}
                sx={{ m: 2 }}
              >
                Next Batch
              </Button>
            </Grid>
            <Grid size={12}>
              <Divider
                flexItem
                sx={{ color: "text.secondary", border: 1, paddingBottom: 5 }}
              />
            </Grid>
            {currentBatchWords.map((word) => (
              <SingleWord
                key={word.word}
                thisWord={word}
                expanded={false}
                gender={""}
              ></SingleWord>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
