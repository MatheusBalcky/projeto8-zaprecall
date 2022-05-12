import styles from './Card.module.css';
import React from 'react';

function CardAnswer () {
    return (
        <div className={styles.boxCard}>
            <p className={styles.text}> REPOSTA AQUIIIIIIIIII</p>
            <ion-icon name="repeat-outline"></ion-icon>
        </div>
    )
}

function CardQuestion ({flipcard}){
    return (
        <div className={styles.boxCard}>
            <p className={styles.text}> Podemos colocar __ dentro do JSX</p>
            <ion-icon onClick={flipcard} name="repeat-outline"></ion-icon>
        </div>
    )
}

export default function Card (){

    function flipcard(){
        setCard(<CardAnswer />)
    }

    const [card, setCard] = React.useState(<CardQuestion flipcard={flipcard}/>)

    return (
        <>
         {card}
        </>
    )
}