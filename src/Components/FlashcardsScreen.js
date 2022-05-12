import React from 'react';
import styles from './FlashcardsScreen.module.css';
import BoxFlashcard from './BoxFlashcard';
import FooterCardScreen from './FooterCardScreen';
import Card from './Card';


export default function FlashcardsScreen (){

    function clickCard(){
        setphaseCard( <Card /> );
    }
    
    const [phaseCard, setphaseCard] = React.useState(<BoxFlashcard clickCard={clickCard}/>)
    

    return (
        <>
            <div className={styles.flashcardsContainer}>

                <header className={styles.top}>
                    <img width="50px" src="./images/logo.png" alt="logoOfZapRecall Brand Thunder" />
                    <h1>ZapRecall</h1>
                </header>

                {phaseCard}
                
            </div>
            <FooterCardScreen />
        </>
    )
}