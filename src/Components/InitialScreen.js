import '../styles/initialScreen.css';

export default function InitialScreen ({changeScreen}){
    return (
        <div className="boxScreen">
            <img src="./images/logo.png" />
            <h1>ZapRecall</h1>
            <button onClick={changeScreen}>Iniciar Recall!</button>
        </div>
    )
}