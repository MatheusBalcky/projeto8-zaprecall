import CardAnswer from "./CardAnswer";
import React from "react";
import '../styles/CardQuestion.css' ;

function CardQuestionComp ({openCard}){
    return (
        <div className="questionBox">
            <p>PERGUNTA AQUI</p>
            <ion-icon onClick={openCard} name="return-down-forward-outline"></ion-icon>
        </div>
    )
}

export default function CardQuestion ({numero}){

    const [isOpen, setisOpen] = React.useState(<CardQuestionComp openCard={openCard} />);
    function openCard () { setisOpen(<CardAnswer numero={numero}/>) }

    return (
        <>
        {isOpen}
        </>
    )
}