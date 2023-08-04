
import "./styles.css"
import { AudioPlayer, AudioplayerCircle } from "./audioplaer"


export const Voz = (props)=>{
    return(
        <div className="voz">
            <div><p>{props.nome}</p></div>
            <div className="play">
                <AudioplayerCircle src={props.audio}/>
            </div>
        </div>
    )
}