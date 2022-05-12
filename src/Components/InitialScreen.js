import styles from './initialScreen.module.css';

export default function InitialScreen ({changeScreen}){
    return (
        <div className={styles.boxScreen}>
            <img src="./images/logo.png" />
            <h1>ZapRecall</h1>
            <button onClick={changeScreen}>Iniciar Recall!</button>
        </div>
    )
}