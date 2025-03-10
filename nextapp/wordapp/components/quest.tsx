import { getAllQuestions } from "@/lib/fetchDataHooks";
import { Question } from "@/lib/schema";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { green, red } from "@mui/material/colors";
import blueGrey from "@mui/material/colors/blueGrey";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid2";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import React from "react";

export const QuestionGamePage = () => {
  const [allQuestions, setAllQuestions] = React.useState<Question[]>([]);
  const [questionStack, setQuestionStack] = React.useState<Question[]>([]);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [optionColors, setOptionColors] = React.useState<string[]>([]);

  React.useEffect(() => {
    //console.log("here" + JSON.stringify(allUsers));
    if (allQuestions.length == 0) {
      //console.log("here2");
      getAllQuestions().then((x) => {
        x = x.questions;
        //console.log("here8:" + x.length);
        const selected: Question[] = [];
        selected.push(x[Math.floor(Math.random() * x.length)]);
        //console.log("herxe8:" + JSON.stringify(selected));
        setAllQuestions(x);
        setQuestionStack(selected);
        setOptionColors([
          blueGrey[700],
          blueGrey[700],
          blueGrey[700],
          blueGrey[700],
        ]);
      });
    }
  }, []);

  const updateQuestionStack = () => {
    //console.log("updateQuestionStack");
    const nextQuestion =
      allQuestions[Math.floor(Math.random() * allQuestions.length)];
    //console.log(nextQuestion);
    const questionStackCopy = [...questionStack];
    questionStackCopy.splice(0, 0, nextQuestion);
    setQuestionStack(questionStackCopy);
    setSelectedOption("");
    setOptionColors([
        blueGrey[700],
        blueGrey[700],
        blueGrey[700],
        blueGrey[700],
      ]);
  };

  const updateSelectedOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checkedOptionColors: string[] = [red[600], red[600], red[600], red[600]];
    checkedOptionColors[questionStack[0].correct.charCodeAt(0) - 'a'.charCodeAt(0)] = green[700];
    setOptionColors(checkedOptionColors);
  };

  return (
    <Grid size={{ md: 8, sm: 12 }} offset={{ md: 2 }}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid size={9}>
              <Typography variant="h2">Deut Questions</Typography>
            </Grid>
            <Grid size={3}>
              <Button variant="contained" href="/" sx={{ m: 2 }}>
                Home
              </Button>
              <Button
                variant="contained"
                onClick={updateQuestionStack}
                sx={{ m: 2 }}
              >
                Next Question
              </Button>
            </Grid>
            <Grid size={12}>
              <Divider
                flexItem
                sx={{ color: "text.secondary", border: 1, paddingBottom: 5 }}
              />
            </Grid>

            <Grid container>
              {questionStack.length > 0 && (
                <>
                  <form onSubmit={handleSubmit}>
                    <FormControl variant="standard">
                      <Grid size={12}>
                        <Box
                          sx={{
                            m: 2,
                            p: 2,
                            bgcolor: blueGrey[700],
                            borderRadius: 2,
                          }}
                        >
                          <Typography variant="h5" className="p-2 m-2">
                            {questionStack[0].question}
                          </Typography>
                        </Box>
                      </Grid>

                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={selectedOption}
                        onChange={updateSelectedOption}
                      >
                        {questionStack[0].options.map((x, i) => (
                          <Grid size={12} key={i}>
                            <Box
                              key={i}
                              sx={{
                                m: 2,
                                p: 2,
                                bgcolor: optionColors[i],
                                borderRadius: 2,
                              }}
                            >
                              <FormControlLabel
                                control={<Radio />}
                                value={`${i}`}
                                label={x}
                              />
                              {/* <Typography variant="body1" className="p-2 m-2">
                          {x}
                        </Typography> */}
                            </Box>
                          </Grid>
                        ))}
                      </RadioGroup>
                      <Button
                        sx={{ mt: 1, mr: 1 }}
                        type="submit"
                        variant="outlined"
                      >
                        Check Answer
                      </Button>
                    </FormControl>
                  </form>
                </>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
