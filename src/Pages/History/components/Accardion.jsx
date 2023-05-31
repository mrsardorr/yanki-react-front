import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Item from './items';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    '&:before': {
      display: 'none',
    },
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

const Accardion = () => {

    const [expanded, setExpanded] = useState('false');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : true);
    };

  return (
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{display:"flex",  alignItems:"center"}}>
          <Typography style={{marginRight:"250px"}}>№ 718 от 28.09.21</Typography>
          <Typography style={{marginRight:"250px"}}>Статус: <br /> <b>Отменён</b> </Typography>
          <Typography>Сумма заказа:: <br /> <b>13682 грн</b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="items-kr d-flex flex-column">
          <Item/>
          <Item/>
          <div className="d-flex">
            <div className="col-4">
            <Typography style={{display:"flex"}}>Имя Фамилия: <br /> <b>Елизаветта Станиславчук</b> </Typography><br /> 
            <Typography style={{display:"flex"}}>Способ доставки: <br /> <b>Доставка Новой Почтой </b> </Typography>

            </div>
            <div className="col-4">
            <Typography style={{display:"flex"}}>E-mail: <br /> <b>ella.s97@gmail.com </b> </Typography>
            </div>
            <div className="col-4">
            <Typography style={{display:"flex"}}>Номер телефона: <br /> <b>+38(067)470 20 66 </b> </Typography><br />
            <Typography style={{display:"flex"}}>Способ оплаты: <br /> <b>Оплата при получении</b> </Typography>
            </div>
          </div>
        </div>
        </AccordionDetails>
      </Accordion>
  )
}

export default Accardion