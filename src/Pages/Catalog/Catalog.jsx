import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import To from "../../Assets/Navbar/link";
import "./Catalog.scss"
import Product from './Components/Product/Product';

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
          setLoading(true);
          setError("");
          try {
            const {
              data: { data },
            } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`);
            setProducts([...data]);
            setLoading(false);
          } catch (err) {
            setLoading(false);
            setError(err.message);
            // setTimeout(() => {
            //   setError("");
            // }, 4000);
          }
        };
    
        fetchApi();
      }, []);
    
      console.log(products);
  return (
    <div className="catalog">
        <div className="container">
        <div className="urls d-flex align-items-center">
          <Link to="/">Главная</Link> <To />{" "}
          <Link to="/catalog">Каталог</Link>
        </div>
        <div className="d-flex align-items-start">
            <div className="d-flex flex-column sidebar">
                <h2>Каталог</h2>
                <ul>
                    <li><Link>New</Link></li>
                    <li><Link>Bestsellers</Link></li>
                    <li><Link>Верхняя одежда</Link></li>
                    <li><Link>Шубы</Link></li>
                    <li><Link>Тренчи</Link></li>
                    <li><Link>Пальто</Link></li>
                    <li><Link>Пуховики и жилеты</Link></li>
                    <li><Link>Костюмы</Link></li>
                    <li><Link>Жакеты</Link></li>
                    <li><Link>Платья</Link></li>
                    <li><Link>Рубашки и блузы</Link></li>
                    <li><Link>Юбки</Link></li>
                    <li><Link>Футболки и топы</Link></li>
                    <li><Link>Аксессуары</Link></li>
                    <li><Link>Sale</Link></li>
                    <li><Link>Summer</Link></li>
                    <li><Link>Посмотреть всё</Link></li>
                </ul>
            </div>
            <div className="d-flex flex-column col-xxl">
            <div className="d-flex filterr">
                <select>
                    <option>Размер</option>
                    <option>XXS</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                </select>
                <select>
                    <option>Цвет</option>
                    <option>Белый</option>
                    <option>Синый</option>
                    <option>Бежевый</option>
                </select>
                <select>
                    <option>Цена</option>
                    <option>По возрастанию</option>
                    <option>По убыванию</option>
                </select>
                <select>
                    <option>Сортировать по</option>
                    <option>Цене</option>
                    <option>Количеству</option>
                    <option>Продажам</option>
                </select>
            </div>
            <div className="d-flex flex-wrap prod-list">
                
            {products.map((product, index) => (
                <Product key={index + "product"} product={product} />
            
            ))}
            

            </div>

            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Catalog