
import "./styles.css"



export const customStyle = {
    fontSize:"20px",
    backgroundColor:"#00d084",
    color:"white",
    minWidth:"290px",
    padding:"10px",
    border:"none",
    borderRadius:"5px"
    
}



export const BTN_CLICK = (props)=>{
    return(
        <button id="contar-conversao-google" onClick={props.onClick} style={customStyle} ><strong>{props.text}</strong></button>
    )
}
