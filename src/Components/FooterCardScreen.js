import "../styles/FooterCardScreen.css";

export default function FooterCardScreen ({numeroDePerguntas, rightAnswer}){
    return (
        <div className="footer">
            <h2>{rightAnswer}/{numeroDePerguntas} CONCLUÍDOS</h2>
        </div>
    )
}