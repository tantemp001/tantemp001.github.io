import React from "react";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

import * as apiUtils from "../felogic/apicalls";

export const SingleWord = (props) => {
  const { thisWord } = props;
  const [currentWord, setCurrentWord] = React.useState({});
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

  console.log(currentWord.translations);
  return (
    <div>
      {currentWord && (
        <>
          <div class="flex flex-wrap justify-content-between">
            <h3>{currentWord["word"]}</h3>
            <Button
              label={buttonLabel}
              onClick={onClickShowDescription}
            ></Button>
          </div>

          {showDescription &&
            currentWord.translations.map((translation) => (
              <>
                <Divider type="dashed"></Divider>
                <div class="flex flex-row flex-wrap justify-content-start">
                  <div className="w-2"><strong>Meaning: </strong></div>
                  <div class="flex flex-wrap justify-content-evenly">
                  {
                    translation['meanings'] && translation['meanings'].map((m) => (<p class="p-2 m-2">{m}</p>))
                  }
                  </div>
                </div>

                <Divider type="dashed"></Divider>
                <div class="flex flex-wrap justify-content-start">
                  <div className="w-2"><strong>Translations: </strong></div>
                  <div>
                    {
                      translation['sentences'].map((sentence) => (
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
            ))}
          <Divider></Divider>
        </>
      )}
    </div>
  );
};
