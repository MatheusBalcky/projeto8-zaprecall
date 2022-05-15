import "../styles/CardInitial.css"
import React from "react"
import CardQuestion from "./CardQuestion";

export function InitialComp ({ numero, openCard }){
    return (
        <div className="initialBox">
            <p>Pergunta {numero + 1}</p>
            <ion-icon onClick={openCard} name="play-outline"></ion-icon>
        </div>
    )
}


// * ESSE TA RODANDO X QNTD DE VEZES COM AS PERGUNTAS
export default function CardInitial({ numero, question, answer, attCardsConcluded, pushIcon, attFinalMessage }){

    const [isOpen, setisOpen] = React.useState(<InitialComp openCard={openCard} numero={numero} />);
    function openCard () {
        setisOpen(<CardQuestion
            question={question}
            answer={answer}
            pushIcon={pushIcon}
            attCardsConcluded={attCardsConcluded}
            numero={numero}
            attFinalMessage={attFinalMessage}/>) 
    }

    return (
        <>
        {isOpen}
        </>
    )
}