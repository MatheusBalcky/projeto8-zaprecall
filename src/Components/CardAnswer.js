import React from "react"
import "../styles/CardAnswer.css"
import CardFinal from "./CardFinal"

function CardAnsComp ({changeComponent}){

    return (

        <div className="boxAnswer">
            <p className="textAnswer">Js é uma sintaxe para escrever HTML em JSX </p>
            <div className="options">

                <div onClick={changeComponent} className="optionRed">
                    <p>Não<br />lembrei</p>
                </div>

                <div onClick={changeComponent} className="optionOrange">
                    <p>Quase não<br />lembrei</p>
                </div>

                <div onClick={changeComponent} className="optionGreen">
                    <p>Zap!</p>
                </div>

            </div>
        </div>
    )
}

export default function CardAnswer ({ numero }){

    const [Component, setComponent] = React.useState(<CardAnsComp changeComponent={changeComponent} />)
    function changeComponent (){
        setComponent(<CardFinal numero={ numero }/>)
    }

    return (
        <>
        {Component}
        </>
    )
}