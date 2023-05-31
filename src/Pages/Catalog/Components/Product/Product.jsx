import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Product.scss"
import tovar from "../../../../Assets/Catalog/tovar.jpg"



const Product = ({product}) => {
  const location = useLocation()
  const [col,setCol] = useState(null)

  const [size,setSize] = useState(product?.size)
  const [color,setColor] = useState(product?.color)
  const [img,setImg] = useState(`http://localhost:3000/uploads/${product?.img}`)


  useEffect(() => {
    if(location.pathname == "/catalog"){
      setCol(true)
    }else{
      setCol(false)
    }
  }, [location.pathname])

  console.log(img)
  return (
    <div className={`product col-lg-6 col-12 ${col?"col-xxl-4":"col-xxl-3"}`}>
    <Link to={`/products/${product?._id}`}>
    <div className="top-part" style={{
      backgroundImage:`url(${img})`,
    }}>
        <div className="like"></div>
    </div>
    <div className="bottom-part">
        <div className="d-flex "><h4>{product?.name}</h4> <h5>new</h5></div>
        <h3>{product?.price} грн</h3>
        <div className="d-flex">{size?.map((sz,idx)=>{
          return <h6 key={idx}>{sz}</h6>
        })}</div>
        <div className="d-flex"><span></span> <span style={{background:"#6F83A4"}}></span> <span style={{background:"#F1DDAA"}}></span></div>
    </div>
    </Link>
    </div>
  )
}

export default Product