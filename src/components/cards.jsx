
import { BTN_CLICK} from "./button"
import "./styles.css"

export const Servicos = (props) =>{
    return(
        <div className="iten-servicos">
            <h3>{props.title}</h3>
            <div className="icon">{props.icon}</div>
            <p>{props.text}</p>
        </div>
    )
}


export const Preco = (props)=>{

    const go_link = ()=>{
        window.location.href = props.to
    }

    return(
        <div className="preco">
            <div className="header" id={props.id}>
                <h2>{props.titulo}</h2>
                <p>{props.subtitulo}</p>
                <hr/>
                <label>hasta {props.segundos} segundos</label>
            </div>
            <div className="man">
                    <li style={{marginTop:"10px"}}>-</li>
                    <li>{props.preco1}</li>
                    <li>{props.preco2}</li>
                    <li>{props.preco3}</li>
                    <li>{props.preco4}</li>
                    <li>{props.preco5}</li>
                    <li>{props.preco6}</li>
            </div>
            <div className="cta-boz">
                <BTN_CLICK onClick = {go_link} text = "Solicita ahora"/>
            </div>
        </div>
    )
}