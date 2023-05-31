import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import To from "../../Assets/Navbar/link";
import imgage from "../../Assets/Catalog/tovar.jpg"
import "./Product.scss";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Accardion from "./components/Accardion";
import Productt from "../Catalog/Components/Product/Product";
import axios from "axios";

const Product = ({props}) => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/${productId}`);
        setProduct({ ...data });

      } catch (err) {}
    };

    fetchApi();
  }, [productId]);
  const img= `http://localhost:3000/uploads/${product?.img}`

  const [size, setSize] = useState('');
  
  const handleChange = (event) => {
    setSize(event.target.value);
  };
  console.log(product)
  return (
    <div className="about productPage">
      <div className="container">
        <div className="urls d-flex align-items-center">
          <Link to="/">Главная</Link> <To />{" "}
          <Link to="/catalog">Каталог</Link><To />{" "}
          <Link to="/catalog?palto">Пальто</Link><To />{" "}
          <Link to={`/catalog/product?id`}>Каталог</Link>
        </div>
        <div className="d-flex mainprod">
          <div className="col-6">
            <div className="imgBox">
              <img src={product.img?img:imgage} alt="" />
            </div>
          </div>
          <div className="col-6">
            <h1>{product.name}</h1>
            <h2>3150 грн</h2>
            <div className="d-flex sveta"><span></span><span style={{background:"#6F83A4"}}></span><span style={{background:"#F1DDAA"}}></span></div>
            <h3>Цвет: Кофе с молоком меланж</h3>
            <div className="razmer">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Размер</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Размер"
                    onChange={handleChange}
                  >
                    <MenuItem value={"XXS"}>XXS</MenuItem>
                    <MenuItem value={"XS"}>XS</MenuItem>
                    <MenuItem value={"S"}>S</MenuItem>
                    <MenuItem value={"M"}>M</MenuItem>
                    <MenuItem value={"L"}>L</MenuItem>
                  </Select>
                </FormControl>
            </div>
            <div className="knopki">
              <button>В КОРЗИНУ</button>
              <button>В ИЗБРАННОЕ</button>
            </div>
            <h4>Подробности</h4>
            <Accardion title="Обмеры и описание"/>
            <Accardion title="Состав и уход"/>
          </div>
        </div>
        <h2>Весь образ</h2>
        <div className="d-flex flex-wrap">
        <Productt/>
        <Productt/>
        </div>
        <h2>Дополните образ</h2>
        <div className="d-flex flex-wrap">
        <Productt/>
        <Productt/>
        <Productt/>
        </div>
        <h2>Вам может понравиться</h2>
        <div className="d-flex flex-wrap">
        <Productt/>
        <Productt/>
        <Productt/>
        <Productt/>
        </div>
        <h2>Вы недавно смотрели</h2>
        <div className="d-flex flex-wrap">
        <Productt/>
        <Productt/>
        </div>
        
          </div>
        </div>
  );
};

export default Product;
