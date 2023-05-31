import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import To from "../../Assets/Navbar/link";
import Insta from "../../Layer/Footer/assets/instagram";
import Tg from "../../Layer/Footer/assets/telegram";
import "./Contacts.scss";




const Contacts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      setError("");
      try {
        const {
          data: { data },
        } = await axios.get("http://localhost:5000/api/product");
        setProducts([...data]);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchApi();
  }, []);

  console.log(products);
  return (
    <div className="contacts">
      <div className="container">
        <div className="urls d-flex align-items-center">
          <Link to="/">Главная</Link> <To />{" "}
          <Link to="/contacts">Контакты</Link>
        </div>
        <h2>Связаться с нами</h2>
        <div className="d-flex">
          <div className="col-3">
            <h4>В социальных сетях</h4>
            <div className="d-flex">
              <Link>
                <Insta
                  style={{
                    transform: "scale(1.5)",
                    marginRight: "15px",
                  }}
                />
              </Link>
              <Link>
                <Tg
                  style={{
                    transform: "scale(1.5)",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="col-3">
            <h4>По телефону</h4>
            <div className="d-flex flex-column">
              <Link>
              +38(067) 158 82 66
              </Link>
              <Link>
              +38(073) 226 39 81
              </Link>
            </div>
          </div>
          <div className="col-3">
            <h4>По почте</h4>
            <div className="d-flex flex-column">
              <Link>
              example@gmail.com
              </Link>
            </div>
          </div>
          <div className="col-3">
            <h4>Наш офис</h4>
            <div className="d-flex flex-column">
              <Link>
              г. Киев, улица Батумская, 18
              </Link>
            </div>
          </div>
        </div>
        <div className="test">
          <h1>
          {products.map((item,idx)=>{
            return item.name
          })}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
