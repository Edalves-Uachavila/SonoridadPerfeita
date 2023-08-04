

import { useState } from 'react';
import { FaFileUpload, FaWindowClose } from 'react-icons/fa';
import Modal from 'react-modal';
import { BTN } from './button';

export const FileLoaderss = (props)=>{

    const customStyles = {
        content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding:"0px",
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
    };

    const [texto, setTexto] = useState("")
        
    const handleresult = ()=>{
        props.text(texto)
        setTexto("")
        props.close();
    }
    
    
    return(
        <Modal isOpen = {props.isOpen} style={customStyles}>
            <div style={{height:"420px"}} >
                <div className="head" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <ul style={{display:"flex", alignItems:"center"}}><FaFileUpload color="mediumslateblue" size={"30px"}/> <h2>Import Script from .txt File</h2> </ul>
                    <ul><FaWindowClose color = "red" onClick={props.close} className="close"/></ul>
                </div>
                <hr />
                <div style={{margin:"20px", display:"flex", flexDirection:"column"}}>
                    <input 
                        id='meu-input' 
                        type="file"
                        onChange={(e)=>{
                            let files = e.target.files;
                            if(files.length == 0) return;

                            const file = files[0];

                            let reader = new FileReader();

                            reader.onload = (e)=>{
                                const file = e.target.result;
                                const lines = file.split(/\r\n|\n/);
                                setTexto(lines.join('\n')); //GUarda o valor do texto com estado na variavel 'texto'
                            };

                            reader.onerror = (e)=> alert(e.target.error.name);
                            reader.readAsText(file)

                        }}
                    />
                    <h4 style={{marginBottom:"0px"}}>Preview Text</h4>
                    <textarea  placeholder='The preview text will be here' value={texto} className='minha-area' cols="30" rows="10" style={{marginTop:"0px"}}></textarea>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        <ul></ul>
                        <ul><BTN onClick = {handleresult} text = "COPY TEXT"/></ul>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
