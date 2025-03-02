import React from "react";

import { Noun, Translation, Word } from "@/lib/schema";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

interface SingleWordProps {
  thisWord: Word | Noun; expanded: boolean; gender: string
}

const SingleWord : React.FC<SingleWordProps> = ({thisWord, expanded = false, gender = ""} : SingleWordProps) => {
  
  const [currentWord, setCurrentWord] = React.useState<Word>();
  const [showDescription, setShowDescription] = React.useState(expanded);

  const genderColor : {[key: string]:  string} = {"neuter" : "yellow", "masculine" : "cyan", "feminine": "pink"}
  const genderArticle : {[key: string]:  string} = {"neuter" : "das", "masculine" : "der", "feminine": "die", "plural": "plural"}

  const onClickShowDescription = () => {
    if (!currentWord) {
      return;
    }
    setShowDescription(!showDescription);
  };

  React.useEffect(() => {
    setCurrentWord(thisWord);
  });

  //console.log(currentWord.translations);
  return (
    <Grid size={10} offset={1}>
      {currentWord && (
        <>
          <Accordion
            expanded={showDescription}
            onChange={onClickShowDescription}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {gender && <Typography variant="h6" sx={{ color: gender ? genderColor[gender] : "rgb(144, 202, 249)" }}>
                {genderArticle[gender]}
              </Typography>}
              <Typography variant="h4" sx={{ color: gender ? genderColor[gender] : "rgb(144, 202, 249)" }}>
                {currentWord.word}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {currentWord.translations.map((translation,i) => (
                <Box key={`${currentWord.word}-vocab-${i}`}>
                  <Divider variant="middle"></Divider>
                  <Box
                    sx={{ m: 2, p: 2, bgcolor: blueGrey[700], borderRadius: 2 }}
                  >
                    <Typography
                      variant="h6"
                      className="p-2 m-2"
                      sx={{ color: blueGrey[900] }}
                    >
                      Meaning:{" "}
                    </Typography>
                    <div className="">
                      {translation.meanings &&
                        translation.meanings.map((m, j) => (
                          <Typography
                            key={`${currentWord.word}-meaning-${i}-${j}`}
                            variant="body1"
                            className="p-2 m-2"
                            display={j%7!=6 ? "inline": ""}
                          >
                            {m}
                          </Typography>
                        ))}
                    </div>
                  </Box>

                  {translation.sentences.length > 0 && (
                    <Box
                      key={`${currentWord.word}-translation-sentence-${i}`}
                      sx={{
                        m: 2,
                        p: 2,
                        bgcolor: blueGrey[700],
                        borderRadius: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        className="p-2 m-2"
                        sx={{ color: blueGrey[900] }}
                      >
                        Translations:{" "}
                      </Typography>
                      <div>
                        {translation.sentences.map((sentence: string[], k) => (
                          <div className=" p-1" key={`${currentWord.word}-translation-sentence-${i}-${k}`}>
                            <Typography variant="body1" className="p-2">
                              {sentence[0]}
                            </Typography>
                            <br />
                            <Typography
                              variant="body1"
                              className="p-2 m-2"
                              sx={{ color: blueGrey[100] }}
                            >
                              {sentence[1]}
                            </Typography>
                            <Divider variant="middle"></Divider>
                          </div>
                        ))}
                      </div>
                    </Box>
                  )}
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
          <Grid size={12}>
            <Divider flexItem sx={{ bgcolor: `primary.light`, border: 1 }} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default SingleWord ;