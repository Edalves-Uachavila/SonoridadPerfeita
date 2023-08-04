
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

export const Faq_es = ()=>{
    return(
        <div className="faq">
            <h1>Preguntas Frecuentes</h1>
            <div className="questinos">
                <Pergunta pergunta = "¿Cómo recibo el audio y en qué formato se envía?" resposta = {"El audio se envía por correo electrónico o WhatsApp, según la preferencia del cliente. Por defecto, enviamos los audios en formato MP3. En caso de que el cliente necesite otro formato específico, simplemente haga la solicitud al momento de la contratación, y estaremos encantados de atender esa demanda. Siempre estamos listos para adaptar nuestros servicios a las necesidades individuales de nuestros clientes."}/>
                <Pergunta pergunta = "¿Cuál es la forma de pago?" resposta = "El pago se realiza de forma anticipada. Aceptamos depósito y transferencia bancaria, PayPal y Payoneer."/>
                <Pergunta pergunta = "¿Puedo elegir cualquier locutor dentro del paquete contratado?" resposta = "Sí, es posible elegir cualquier locutor dentro del paquete contratado. Sin embargo, es importante destacar que una pequeña parte de los locutores tiene un valor diferenciado, lo que resulta en un cargo adicional de créditos en relación al valor estándar. Además, algunos locutores pueden tener restricciones con respecto a la grabación de ciertos contenidos, como textos de más de 40 segundos o textos extensos dentro del paquete, así como esperas telefónicas."/>
                <Pergunta pergunta = "¿Y si no me gusta el audio contratado?" resposta = "Brindamos total apoyo para correcciones, siempre que el error sea de nuestra responsabilidad, como errores de lectura, pronunciación o entonación. Sin embargo, las modificaciones en el texto o el locutor implicarán un cargo adicional. Para evitar cualquier inconveniente, es fundamental que el cliente proporcione toda la información relevante relacionada con la grabación y producción del audio antes de realizar la grabación. La falta de esta información puede resultar en cargos adicionales en caso de que sean necesarias correcciones. Estamos comprometidos a proporcionar un servicio de calidad y garantizar la satisfacción de nuestros clientes. Si surgieran dudas o necesidades de corrección, estaremos listos para resolverlas de la mejor manera posible."/>
                <Pergunta pergunta = "¿Puedo escuchar una muestra del audio antes de contratar?" resposta = "Lamentablemente, no podemos enviar una muestra del audio debido a que los locutores y productores reciben el pago por adelantado para comenzar el servicio. Sin embargo, en nuestro sitio web, puede encontrar varias grabaciones ya producidas por nuestro equipo, en las cuales podrá comprobar la calidad de nuestro trabajo."/>
                <Pergunta pergunta = "¿Cuál es la calidad de las voces disponibles en el banco de voces?" resposta = "Contamos con un repertorio de locutores altamente calificados y voces de calidad para satisfacer las necesidades de cada proyecto."/>
            </div>
        </div>
    )
}
