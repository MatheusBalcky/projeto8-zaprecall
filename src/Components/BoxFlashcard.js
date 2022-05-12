import styles from "./BoxFlashcard.module.css"

export default function BoxFlashcard(){
    function clickCard(){
        console.log('clicou na carta');
    }

    return (
        <div className={styles.boxCard}>
            <p>Pergunta {"1"}</p>
            <ion-icon onClick={clickCard} name="play-outline"></ion-icon>
        </div>
    )
}