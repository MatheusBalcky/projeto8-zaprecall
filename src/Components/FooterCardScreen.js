import "../styles/FooterCardScreen.css";

export default function FooterCardScreen ({numeroDePerguntas}){
    return (
        <div className="footer">
            <h2>0/{numeroDePerguntas} CONCLUÍDOS</h2>
        </div>
    )
}