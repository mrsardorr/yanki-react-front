import React from 'react'
import tovar from "../../../Assets/Catalog/tovar.jpg";


const Item = () => {

  let randomArt = Math.floor(Math.random(1) * 99999999);

  return (
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
            Размер: L
            </div>
            <div className="col-3">
            Количество: 3
            </div>
            <div className="col-2 d-flex align-items-center">
              <h4>8999 грн</h4>
            </div>
          </div>
  )
}

export default Item