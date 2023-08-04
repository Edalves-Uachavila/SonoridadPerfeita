
import "./faq.css"

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Pergunta = (props)=>{
    return(
        <div style={{marginBottom:"5px"}}>
            <Dropdown placeholder={<h3>{props.pergunta}</h3>} options={[<p style={{fontSize:"15pt"}}>{props.resposta}</p>]} style={{border:"none"}}/>
        </div>
    )
}

export const Faq = ()=>{
    return(
        <div className="faq">
            <h1>Perguntas Frequentes</h1>
            <div className="questinos">
                <Pergunta pergunta = "Qual o prazo de entrega?" resposta = {"O prazo de entrega pode variar dependendo do serviço contratado, do locutor(a) selecionado(a) e do tamanho do texto. Devido a essas variáveis, não definimos um prazo padrão. Recomendamos que, no momento da solicitação, o cliente se informe sobre o prazo de entrega específico para o seu pedido. Estamos sempre disponíveis para esclarecer qualquer dúvida relacionada a esse assunto."}/>
                <Pergunta pergunta = "Como recebo o áudio e em qual formato é enviado?" resposta = "O áudio é enviado por e-mail ou WhatsApp, conforme preferência do cliente. Por padrão, enviamos os áudios no formato MP3. Caso o cliente necessite de outro formato específico, basta fazer a solicitação no momento da contratação, e teremos o prazer de atender essa demanda. Estamos sempre prontos para adequar nossos serviços às necessidades individuais dos nossos clientes."/>
                <Pergunta pergunta = "Qual a forma de pagamento?" resposta = "O pagamento é realizado de forma antecipada. Aceitamos depósito e transferência bancária, paypal e payonner"/>
                <Pergunta pergunta = "Posso escolher qualquer locutor dentro do pacote contratado?" resposta = "Sim, é possível escolher qualquer locutor dentro do pacote contratado. No entanto, é importante ressaltar que uma pequena parte dos locutores possui um valor diferenciado, o que resulta na cobrança de uma quantidade adicional de créditos em relação ao valor padrão. Além disso, alguns locutores podem ter restrições quanto à gravação de determinados conteúdos, como textos acima de 40 segundos, textos extensos dentro do pacote e esperas telefônicas."/>
                <Pergunta pergunta = "E se eu não gostar do áudio contratado?" resposta = "Damos total suporte para correções, desde que o erro seja de nossa responsabilidade, como por exemplo: erros de leitura, pronúncia ou entonação. No entanto, alterações de texto ou locutor implicarão em uma cobrança adicional. Para evitar qualquer transtorno, é fundamental que o cliente forneça todas as informações relevantes referentes à gravação e produção do áudio antes da gravação ser feita. A falta dessas informações pode resultar em cobranças adicionais caso sejam necessárias correções. Estamos comprometidos em fornecer um serviço de qualidade e garantir a satisfação dos nossos clientes. Se surgirem quaisquer dúvidas ou necessidades de correção, estaremos prontos para resolver da melhor forma possível."/>
                <Pergunta pergunta = " Posso ouvir uma prévia do áudio antes de contratar?" resposta = "Infelizmente, não podemos enviar uma prévia do áudio devido ao fato de que os locutores e produtores recebem pagamento antecipado para iniciar o serviço. No entanto, em nosso site, você pode encontrar diversas gravações já produzidas por nossa equipe, nas quais poderá comprovar a qualidade do nosso trabalho."/>
            </div>
        </div>
    )
}
