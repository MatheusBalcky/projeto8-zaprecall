import styles from './initialScreen.module.css';

export default function InitialScreen (){
    return (
        <div >
            <div className={styles.boxScreen}>
                <img src="./images/logo.png" />
                <h1>ZapRecall</h1>
                <button>Iniciar Recall!</button>
            </div>
        </div>
    )
}