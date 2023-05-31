import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    marginBottom:"20px",
    
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
   
    flexDirection: 'row',
    padding:"0px",
    '& .MuiAccordionSummary-expandIconWrapper': {
      transform: 'rotate(270deg)',
      color:"#E0BEA2"
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
      display:"flex",
      alignItems:"center"
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    // borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

const Accardion = (props) => {

    const [expanded, setExpanded] = useState('false');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : true);
    };

  return (
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{display:"flex",  alignItems:"center"}}>
          <Typography style={{marginRight:"250px"}}>{props.title} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
              Состав: 50% Шерсть, 50% Полиэстер <br />
              Подкладка: 100% Полиэстер <br />
              Утеплитель: 90% Пух, 10% Перо <br /> <br />
              
              - Не стирать <br /> 
              - Гладить при температуре утюга до 110°C  <br />
              - Не отбеливать <br />
              - Сухая чистка (химчистка) <br />
              - Барабанная сушка запрещена
          </p>
        </AccordionDetails>
      </Accordion>
  )
}

export default Accardion