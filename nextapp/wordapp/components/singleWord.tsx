import React from "react";

import { Word } from "@/lib/schema";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid2";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import { blueGrey } from "@mui/material/colors";

export const SingleWord = (thisWord: Word) => {
  const [currentWord, setCurrentWord] = React.useState<Word>();
  const [buttonLabel, setButtonLabel] = React.useState("Show Details");
  const [showDescription, setShowDescription] = React.useState(false);

  const onClickShowDescription = () => {
    if (!currentWord) {
      return;
    }
    if (showDescription) {
      setButtonLabel("Show Details");
    } else {
      setButtonLabel("Hide Details");
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
              <Typography variant="h4" sx={{ color: "rgb(144, 202, 249)" }}>
                {currentWord.word}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {currentWord.translations.map((translation) => (
                <>
                  <Divider variant="middle"></Divider>
                  <Box
                    sx={{ m: 2, p: 2, bgcolor: blueGrey[500], borderRadius: 2 }}
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
                        translation.meanings.map((m) => (
                          <Typography
                            variant="body1"
                            className="p-2 m-2"
                            display="inline"
                          >
                            {m}
                          </Typography>
                        ))}
                    </div>
                  </Box>

                  {translation.sentences.length > 0 && (
                    <Box
                      sx={{
                        m: 2,
                        p: 2,
                        bgcolor: blueGrey[500],
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
                        {translation.sentences.map((sentence: string[]) => (
                          <div className=" p-1">
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
                </>
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
