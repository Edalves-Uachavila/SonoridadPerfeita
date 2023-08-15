
import "../pages.css"
import {  FaCheckCircle, FaMicrophone,  FaPhone } from "react-icons/fa"
import { MdVolumeUp } from "react-icons/md"
import { BiEuro, } from "react-icons/bi"
import { Preco, Servicos } from "../../components/cards"
import { Voz } from "../../components/vozes"
import { Faq_es } from "../../components/faq/faq_es"
import { BTN_CLICK} from "../../components/button"
import { Locutores } from "./locutor"



export const Ladingpage_es = ()=>{

    const whatsapp_link =  "https://wa.me/message/KZU5DOQPWOQPP1"

    const go_link = ()=>{
        window.location.href = whatsapp_link;
    }
   
    return(
        <div className="ladingpage-container">
            
            <main>
                <div className="headline">
                    
                </div>
                <div className="porque">
                    <h2>¿Por qué debería elegirnos a nosotros?</h2>
                    <h4>¡Descubre el Poder de Nuestras Locuciones!</h4>
                    <div className="vantagens">
                        <div className="item">
                            <div className="icon"><FaMicrophone color="white" size={"120"}/></div>
                            <div className="text">
                                <h2>Banco de voces</h2>
                                <p>Con locutores profesionales altamente calificados y una diversidad de estilos de voces, SonoridadPerfeita es la solución ideal para todas sus necesidades de locución. Desde videos animados hasta anuncios, documentales, radio, televisión y mucho más, ¡estamos listos para superar sus expectativas!</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon"><FaCheckCircle color="white" size={"120"}/></div>
                            <div className="text">
                                <h2>Calidad y rapidez</h2>
                                <p>Ya sea en el servicio al cliente o en la prestación del servicio, siempre nos esforzamos por la agilidad y calidad. Contamos con un equipo de locutores listos para entregar su audio en el menor tiempo posible, garantizando eficiencia en todo el proceso.</p>
                            </div>
                        </div> 
                        <div className="item">
                            <div className="icon"><BiEuro color="white" size={"120"}/></div>
                            <div className="text">
                                <h2>¡Precios irresistibles!</h2>
                                <p>Nuestros precios se ajustan perfectamente a su bolsillo. Garantizamos la mejor relación calidad-precio para usted. ¿Y sabe qué es lo mejor? Las promociones imperdibles son constantes en nuestro blog, ¡aproveche!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="servicos" id = "servisos">
                    <h1>Servicios</h1>
                    <h2>Crea un Impacto Memorables con Nuestros Servicios</h2>
                    <div className="items">
                        <Servicos title = "Locuciones simples" icon = {<FaMicrophone size={"80"}/>} text = "Locución simple es la voz que habla por sí sola. Una experiencia única, sin música de fondo ni efectos, solo la voz de nuestros locutores profesionales transmitiendo emoción pura y cautivadora."/>
                        <Servicos title = "SPOTS" icon = {<MdVolumeUp size={"80"}/>} text = "El spot es el medio de divulgación creado con diversos elementos radiofónicos, como locución, música de fondo y efectos. Es muy utilizado en radios y en vehículos de sonido."/>
                        <Servicos title = "Esperas Telefónicas" icon = {<FaPhone size={"80"}/>} text = "¡También ofrecemos servicios de grabación de Esperas telefónicas! ¡No pierda la oportunidad de impresionar a sus clientes mientras esperan!"/>
                    </div>
                </div>
                <div className="vozes-box" id = "voces">
                    <h1>Banco de Voces</h1>
                    <h3>¡Prepárese para sorprenderse con un repertorio increíble de locutores altamente calificados, listos para convertir su mensaje en algo verdaderamente memorable! Desde voces dinámicas y vibrantes hasta estilos impactantes y envolventes, tenemos la voz perfecta para cada proyecto.</h3>
                    <div className="items" id = "#voces">
                        <div>
                            <h2>Hombres</h2>
                            <div className="lista-de-vozes">
                                <hr/>
                                <Voz nome = "Emilio Cordero"   audio = {Locutores.emilio}/><hr/>
                                <Voz nome = "Daniel Rodríguez" audio = {Locutores.daniel}/><hr/>
                                <Voz nome = "Carlos Martínez"  audio = {Locutores.carlos}/><hr/>
                                <Voz nome = "Manuel Vargas"    audio = {Locutores.manuel}/><hr/>
                                <Voz nome = "Guillermo Pacheco" audio = {Locutores.guillerm}/><hr/>
                                <Voz nome = "Francisco Ruiz"    audio = {Locutores.francisco}/><hr/>
                                <Voz nome = "Hugo Castro"       audio = {Locutores.hugo}/><hr/>
                                <Voz nome = "Pedro Morales"     audio = {Locutores.pedro}/><hr/>
                                <Voz nome = "Mario Rivera"      audio = {Locutores.mario}/><hr/>
                                <Voz nome = "Pablo Silva"       audio = {Locutores.pablo}/><hr/>
                                <Voz nome = "Sergio Díaz"       audio = {Locutores.sergio}/><hr/>
                                <Voz nome = "Antonio Ortiz"     audio = {Locutores.antonio}/><hr/>
                                <Voz nome = "Alejandro López"   audio = {Locutores.alejandro}/><hr/>
                            </div>    
                        </div>
                        <div>
                            <h2>Mujeres</h2>
                            <div className="lista-de-vozes">
                                <hr/>
                                <Voz nome = "Camila Fernández"  audio = {Locutores.camila}/><hr/>
                                <Voz nome = "Daniela Fuentes" audio = {Locutores.daniela}/><hr/>
                                <Voz nome = "Isabella Martínez" audio = {Locutores.isabella}/><hr/>
                                <Voz nome = "Adriana Silva"     audio = {Locutores.adriana}/><hr/>
                                <Voz nome = "Teresa Navarro"  audio = {Locutores.teresa}/><hr/>
                                <Voz nome = "Elena González"    audio = {Locutores.elena}/><hr/>
                                <Voz nome = "Natalia Castro"    audio = {Locutores.natalia}/><hr/>
                                <Voz nome = "Martina Rodríguez" audio = {Locutores.martina}/><hr/>
                                <Voz nome = "Alba Vargas"       audio = {Locutores.alba}/><hr/>
                                <Voz nome = "María Delgado"     audio = {Locutores.maria}/><hr/>
                                <Voz nome = "Ana Rivera"     audio = {Locutores.ana}/><hr/>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className="precos" id = "precios">
                    <h1>Tarifas</h1>
                    <h3>Valoramos su inversión y ofrecemos tarifas que se ajustan a las necesidades de su empresa.</h3>
                    <div className="lista-de-preco">
                        <Preco
                            to = {whatsapp_link}
                            segundos = "40"
                            titulo    = "Locuciones simples"
                            preco1 = "1 Locución   – 15€"
                            preco2 = "10 Locuciones – 80€"
                            preco3 = "20 Locuciones – 140€"
                            preco4 = "30 Locuciones – 165€"
                            preco5 = "40 Locuciones – 180€"
                            preco6 = "50 Locuciones – 200€"

                        />

                        <Preco
                            to = {whatsapp_link}
                            segundos = "40"
                            titulo    = "Spots"
                            preco1 = "1  Spot  – 40€"
                            preco2 = "10 Spots – 260€"
                            preco3 = "20 Spots – 440€"
                            preco4 = "30 Spots – 610€"
                            preco5 = "40 Spots – 760€"
                            preco6 = "50 Spots – 860€"

                        />
                        
                        <Preco
                            to = {whatsapp_link}
                            segundos = "8"
                            titulo    = "Espera Telefónica"
                            preco1 = "Tipo 1"
                            preco2 = "Solo voz - 40€"
                            preco3 = "---------------------"
                            preco4 = "Tipo 2"
                            preco5 = "Con música de fondo - 80€"
                            preco6 = "---------------------"

                        />
                        
                    </div>
                </div>
                <div className="faq">
                    <Faq_es/>
                </div>
                <div className="final-cta">
                    <h2 style={{display:"flex", justifyContent:"center"}}><div className="icon1">🚀</div> ¡Tu Éxito Comienza Aquí! <div className="icon2">🚀</div></h2>
                    <p>¡No pierdas tiempo! Solicita ahora mismo nuestras locuciones profesionales y encanta a tu público con voces de alta calidad.</p>
                    <BTN_CLICK onClick = {go_link} text = "Solicita ahora"/>
                </div>
                <div className="contactos">
                    .
                </div>
            </main>
        </div>
    )
}