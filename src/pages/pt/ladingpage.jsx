
import "../pages.css"
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaMicrophone,  FaMoneyBill, FaPhone, FaSpeakerDeck } from "react-icons/fa"
import { MdSpeaker, MdSpeakerPhone, MdVolumeUp } from "react-icons/md"
import { BiDollar, BiEuro, BiPhone, BiSpeaker } from "react-icons/bi"
import { BsFillPhoneFill, BsPhoneFill, BsSpeaker, BsVolumeUpFill } from "react-icons/bs"
import { Preco, Servicos } from "../../components/cards"
import { Voz } from "../../components/vozes"
import { Faq } from "../../components/faq/faq"


export const Ladingpage = ()=>{
    
    // Função para obter a linguagem definida no navegador
    const userLanguage = navigator.language.toLowerCase();

    // Verifica se o idioma é o português ou o inglês e redireciona para a rota apropriada
    if (userLanguage === "es") {
        window.location.href = "/es";
    } else if(userLanguage === "es-es") {
        window.location.href = "/es";
    } else if(userLanguage === "es-us") {
        window.location.href = "/es";
    }  


    return(
        <div className="ladingpage-container">
            
            <main>
                <div className="headline">
                    
                </div>
                <div className="porque">
                    <h2>Descubra o Poder das Nossas Locuções!</h2>
                    <h1>Por que devo escolher a vocês?</h1>
                    <div className="vantagens">
                        <div className="item">
                            <div className="icon"><FaMicrophone color="white" size={"120"}/></div>
                            <div className="text">
                                <h2>Banco de vozes</h2>
                                <p>Com locutores profissionais altamente qualificados e uma diversidade de estilos de vozes, a SonoridadePerfeita é a solução ideal para todas as suas necessidades de locução. De vídeos animados a chamadas, documentários, rádio, TV e muito mais - estamos prontos para superar suas expectativas!</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon"><FaCheckCircle color="white" size={"120"}/></div>
                            <div className="text">
                                <h2>Qualidade e rapidez</h2>
                                <p>Seja no atendimento ou na prestação do serviço, prezamos sempre pela agilidade e qualidade! Contamos com uma equipe de locutores prontos para entregar o seu áudio no menor tempo possível, garantindo eficiência em todo o processo.</p>
                            </div>
                        </div> 
                        <div className="item">
                            <div className="icon"><BiEuro color="white" size={"120"}/></div>
                            <div className="text">
                                <h2>Preços Irresistíveis!</h2>
                                <p>Nossos valores cabem perfeitamente no seu bolso. Garantimos a melhor relação custo-benefício para você. E sabe o que é melhor? Promoções imperdíveis são constantes em nosso blog, aproveite!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="servicos">
                    <h1>serviços</h1>
                    <h2>Crie um Impacto Memorável com os Nossos Serviços</h2>
                    <div className="items">
                        <Servicos title = "Locuções simples" icon = {<FaMicrophone size={"80"}/>} text = "Locução simpes é a voz que fala por si só! Uma experiência única, sem fundo musical ou efeitos, apenas a voz de nossos locutores profissionais transmitindo emoção pura e cativante."/>
                        <Servicos title = "SPOTS" icon = {<MdVolumeUp size={"80"}/>} text = "Spot é o meio de divulgação criado com diversos elementos radiofônicos, como locução, trilha sonora e efeitos. Muito utilizado em rádios e carro de som!"/>
                        <Servicos title = "Esperas Telefonicas" icon = {<FaPhone size={"80"}/>} text = "Também oferecemos serviços de gravação de Esperas telefónicas! Não perca a chance de impressionar seus clientes enquanto eles aguardam!"/>
                    </div>
                </div>
                <div className="vozes-box">
                    <h1>Banco de Vozes</h1>
                    <h3>Prepare-se para se surpreender com um repertório incrível de locutores altamente qualificados, prontos para transformar a sua mensagem em algo verdadeiramente memorável! De vozes dinâmicas e vibrantes a estilos impactantes e envolventes, temos a voz perfeita para cada projeto.</h3>
                    <div className="items">
                        <div>
                            <h2>MASCULINAS</h2>
                            <div className="lista-de-vozes">
                                <hr/>
                                <Voz nome = "Camilo juj uhu uhuh "/><hr/>
                                <Voz nome = "Bruno"/><hr/>
                                <Voz nome = "Nando"/><hr/>
                                <Voz nome = "Igor"/><hr/>
                                <Voz nome = "Bruno"/><hr/>
                                <Voz nome = "Nando"/><hr/>
                                <Voz nome = "Igor"/><hr/>
                                <Voz nome = "Igor"/><hr/>
                                <Voz nome = "Bruno"/><hr/>
                                <Voz nome = "Nando"/><hr/>
                                <Voz nome = "Igor"/><hr/>
                            </div>    
                        </div>
                        <div>
                            <h2>FEMININAS</h2>
                            <div className="lista-de-vozes">
                                <hr/>
                                <Voz nome = "Carla"/><hr/>
                                <Voz nome = "Fatima"/><hr/>
                                <Voz nome = "Gessica"/><hr/>
                                <Voz nome = "Zinha"/><hr/>
                                <Voz nome = "Fatima"/><hr/>
                                <Voz nome = "Gessica"/><hr/>
                                <Voz nome = "Zinha"/><hr/>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className="precos">
                    <h1>Preços</h1>
                    <h3>Valorizamos o seu investimento e oferecemos preços que se adequam às necessidades da sua empresa.</h3>
                    <div className="lista-de-preco">
                        <Preco
                            to = "pedido"
                            segundos = "40"
                            titulo    = "Locuções Simples"
                            preco1 = "1  off – 15,00 €"
                            preco2 = "10 off – 80,00 €"
                            preco3 = "20 off – 140,00 €"
                            preco4 = "30 off – 165,00 €"
                            preco5 = "40 off – 180,00 €"
                            preco6 = "50 off – 200,00 €"

                        />

                        <Preco
                            to = "pedido"
                            segundos = "40"
                            titulo    = "Spots"
                            preco1 = "1  Spot  – 40,00 €"
                            preco2 = "10 Spots – 250,00 €"
                            preco3 = "20 Spots – 430,00 €"
                            preco4 = "30 Spots – 600,00 €"
                            preco5 = "40 Spots – 750,00 €"
                            preco6 = "50 Spots – 850,00 €"

                        />
                        
                        <Preco
                            to = "pedido"
                            segundos = "8"
                            titulo    = "Espera Telefônica"
                            preco1 = "Tipo 1"
                            preco2 = "Apenas voz – 40,00 €"
                            preco3 = "---------------------"
                            preco4 = "Tipo 2"
                            preco5 = "Com fundo musical – 80,00 €"
                            preco6 = "---------------------"

                        />
                        
                    </div>
                </div>
                <div className="faq">
                    <Faq/>
                </div>
                <div className="clienntes">

                </div>
                <div className="contacots">

                </div>
            </main>
        </div>
    )
}