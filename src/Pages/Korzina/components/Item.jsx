import React, { useEffect, useState } from 'react'
import Size from "./size";
import Counter from "./Counter";
import DBtn from "./dBtn";
import tovar from "../../../Assets/Catalog/tovar.jpg";


const Item = (props) => {
  let randomArt = Math.floor(Math.random(1) * 99999999);

  const [now, setNow] = useState(1);
  const [oldNow, setOldNow] = useState(1);
  const [price, setPrice] = useState(9450);
  const [Dprice, setDPrice] = useState(price);
  

  useEffect(() => {
    
    if(now>=1){
      setOldNow(now)
      if(oldNow>now){
        props.getData( {
          price:props.data.price-Dprice
        })
      }else{
      props.getData( {
        price:props.data.price+Dprice
      }) 
    }
    }else{
      props.getData( {
        price:props.data.price
      })
    }
    // props.getData( {
    //   now:now,
    //   price:price
    // })
  }, [now,price,Dprice,oldNow,])
  

  return (
    <div className="items-kr d-flex flex-column">
          <div className="item-kz d-flex align-items-center">
            <div className="col-3 d-flex">
              <div className="item-img">
                <img src={tovar} alt="item-img" />
              </div>
              <div className="item-name d-flex flex-column">
                <p>арт. {randomArt}</p>
                <h5>Кремовое пальто</h5>
              </div>
            </div>
            <div className="col-1">
              <div
                className="item-color"
                style={{ background: "#F1DDAA" }}
              ></div>
            </div>
            <div className="col-3">
              <Size/>
            </div>
            <div className="col-3">
              <Counter setNow={setNow} now={now} setPrice={setPrice} price={price}/>
            </div>
            <div className="col-2 d-flex align-items-center">
              <h4>{price} грн</h4>
              <DBtn/>
            </div>
          </div>
        </div>
  )
}

export default Item