
import "./styles.css"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";


export  function Voz_select(props){

 
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="my-select">
      <FormControl sx={{ m: 1, minWidth: 300}}>
        <InputLabel style={{zIndex:"0"}} id="demo-controlled-open-select-label"><strong>Voz</strong></InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.value}
          label="Speed"
          onChange={props.onChange}
        >
          <MenuItem value={-0.50}>-0.50</MenuItem>
          <MenuItem value={-1}>-1</MenuItem>
          <MenuItem value={0}>Normal</MenuItem>
          <MenuItem value={0.50}>0.50</MenuItem>
          <MenuItem value={0.1}>1</MenuItem>
          <MenuItem value={0.2}>2</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


export  function Servico_select(props){

 
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300}}>
        <InputLabel style={{zIndex:"0"}} id="demo-controlled-open-select-label"><strong>serviço</strong></InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.value}
          label="Speed"
          onChange={props.onChange}
        >
          <MenuItem value={"Esperas Telefonicas"}>Esperas Telefonicas</MenuItem>
          <MenuItem value={"Locuções simples"}>Locuções simples</MenuItem>
          <MenuItem value={"SPOTS"}>SPOTS</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}




