import "../styles/FooterCardScreen.css";

export default function FooterCardScreen ({numeroDePerguntas, cardsConcluded, icons, finalMessage}){
    return (
        <div className="footer">
            <p className="finalMessage">{finalMessage}</p>
            <h2>{cardsConcluded}/{numeroDePerguntas} CONCLUÍDOS</h2>
            <div className="iconsQuestions" >
                {icons}
            </div>
        </div>
    )
}