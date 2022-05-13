import "../styles/BoxFlashcard.css"
import React from "react"
import CardQuestion from "./CardQuestion";

function InitialComp ({ numero, openCard }){
    return (
        <div className="questionBox">
            <p>Pergunta {numero + 1}</p>
            <ion-icon onClick={openCard} name="play-outline"></ion-icon>
        </div>
    )
}




// * ESSE TA RODANDO X QNTD DE VEZES COM AS PERGUNTAS
export default function CardInitial({ numero, question, answer }){

    const [isOpen, setisOpen] = React.useState(<InitialComp openCard={openCard} numero={numero} />);
    function openCard () { setisOpen(<CardQuestion />) }

    return (
        <>
        {isOpen}
        </>
    )
}