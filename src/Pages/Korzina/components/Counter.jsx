import React, { useEffect, useState } from 'react'
import Minus from './assets/Minus';
import Plus from './assets/Plus';


const Counter = (props) => {
  const [Dprice, setDPrice] = useState(props.price);
    const minusHandle = () => {
      if(props.now>=2){
        props.setNow(props.now-1);
        props.setPrice(props.price-Dprice)
      }else{
        props.setNow(1)
        props.setPrice(Dprice)
      }
      
    };
    const plusHandle = () => {
      props.setNow(props.now+1);
      props.setPrice(props.price+Dprice)
    };
    
    
  return (
    <div className="razmer">
               <div className="counter d-flex">
                <Minus onClick={minusHandle} style={{cursor:"pointer"}}/>
                <h6>{props.now}</h6>
                <Plus onClick={plusHandle} style={{cursor:"pointer"}}/>
               </div>
    </div>
  )
}

export default Counter