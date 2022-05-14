import '../styles/CardFinal.css'

export default function CardFinal ({numero, answerClicked}){
    let ionIcon  ;
    if (answerClicked === 'red'){ionIcon = <ion-icon name="close-circle"></ion-icon> }
    else if (answerClicked === 'orange'){ionIcon = <ion-icon name="help-circle"></ion-icon> }
    else if (answerClicked === 'green'){ionIcon = <ion-icon name="checkmark-circle"></ion-icon> }
    return (
        <div className="finalBox">
            <p className={answerClicked} ><del>Pergunta {numero + 1}</del></p>
            {ionIcon}
        </div>
    )
}