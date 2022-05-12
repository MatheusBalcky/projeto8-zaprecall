import styles from "./BoxFlashcard.module.css"


export default function BoxFlashcard({clickCard}){
    

    return (
        <div className={styles.boxCard}>
            <p>Pergunta {"1"}</p>
            <ion-icon onClick={clickCard} name="play-outline"></ion-icon>
        </div>
    )
}