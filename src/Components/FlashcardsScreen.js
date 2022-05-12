import styles from './FlashcardsScreen.module.css';
import BoxFlashcard from './BoxFlashcard';
import FooterCardScreen from './FooterCardScreen';

export default function FlashcardsScreen (){
    return (
        <>
            <div className={styles.flashcardsContainer}>

                <header className={styles.top}>
                    <img width="50px" src="./images/logo.png" alt="logoOfZapRecall Brand Thunder" />
                    <h1>ZapRecall</h1>
                </header>

                <BoxFlashcard />
                
            </div>
            <FooterCardScreen />
        </>
    )
}