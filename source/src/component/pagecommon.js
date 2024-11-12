import React from "react";

import { Button } from "primereact/button";
import { Divider } from 'primereact/divider';

export const PageCommon = (props) => {
    return (
    <><div className="flex flex-wrap justify-content-around">
        <a href="/" className="p-button p-button-help font-bold"> Random Words </a>
        <a href="/verbgame.html" className="p-button p-button-help font-bold"> Verbs </a>
        <a href="/noungame.html" className="p-button p-button-help font-bold"> Nouns </a>
    </div>
     <Divider></Divider>
    </>);
}