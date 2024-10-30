import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FormAccordion = () => {
  // Um estado único para controlar qual Accordion está expandido
  const [expanded, setExpanded] = useState(false);
  
  // Função para lidar com a troca de acordiões
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);  // Se expandir, marca o painel. Se fechar, define como false
  };
  const [stateEmail, setStateEmail] = useState()
  const [stateSenha, setStateSenha] = useState()

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1b-header"
        >
          <Typography>Formulário</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Nome"
            name="nome"
            value={stateEmail}
            onChange={(e) => {
              setStateEmail(e.target.value)
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={stateSenha}
            onChange={(e) => {
              setStateSenha(e.target.value)
            }}
            fullWidth
            margin="normal"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Formulário</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Nome"
            name="nome"
            value={stateEmail}
            onChange={(e) => {
              setStateEmail(e.target.value)
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={stateSenha}
            onChange={(e) => {
              setStateSenha(e.target.value)
            }}
            fullWidth
            margin="normal"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3b-header"
        >
          <Typography>Formulário</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Nome"
            name="nome"
            value={stateEmail}
            onChange={(e) => {
              setStateEmail(e.target.value)
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={stateSenha}
            onChange={(e) => {
              setStateSenha(e.target.value)
            }}
            fullWidth
            margin="normal"
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FormAccordion;

