
import "../pages.css"

import { Link } from "react-router-dom"
import { BTN_CLICK} from "../../components/button"
import { Servico_select, Voz_select } from "../../components/select"
import { useState } from "react"


export const Pedido = ()=>{

    const [voz, setVoz] = useState("")
    const [texto, setTexto] = useState("")
    const [servico, setServico] = useState("")

    const send_with_whatsap = ()=>{
        console.log(
            {"servico":servico, "texto":texto, "voz":voz}
        );
    }

    const send_with_email = ()=>{
        console.log(
            {"servico":servico, "texto":texto, "voz":voz}
        );
    }

    return(
        <div className="pedido-box">
            <div>
                <h3>Meu Pedido</h3>
                <div className="header">
                    <Servico_select onChange = {e=>{setServico(e.target.value)}}/>
                    <Voz_select onChange = {e=>{setVoz(e.target.value)}}/>
                </div>
                <div className="main">
                    <textarea onChange={e=>{setTexto(e.target.value)}} placeholder="Digite seu Roteiro..."></textarea>
                    <BTN_CLICK onClick = {send_with_whatsap} text = "Eviar pedido pelo Whatsap"/>
                    <BTN_CLICK onClick = {send_with_email} text = "Eviar pedido pelo E-mail"/>
                    <Link to = "/">voltar para pagina inicial</Link>
                </div>
            </div>
        </div>
    )
}