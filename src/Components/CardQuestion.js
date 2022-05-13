import CardAnswer from "./CardAnswer";
import React from "react";

function CardQuestionComp ({openCard}){
    return (
        <div className="questionBox">
            <p>PERGUNTA AQUI</p>
            <ion-icon onClick={openCard} name="play-outline"></ion-icon>
        </div>
    )
}

export default function CardQuestion (){

    const [isOpen, setisOpen] = React.useState(<CardQuestionComp openCard={openCard} />);
    function openCard () { setisOpen(<CardAnswer />) }

    return (
        <>
        {isOpen}
        </>
    )
}