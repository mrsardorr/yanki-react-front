import React from "react";
import { Link} from "react-router-dom";
import "./Home.scss";
import Slider from "react-slick";
import { kurtki, palto, parki, shuba } from "../../Assets/Home/slick";

const Home = () => {
  const settings = {
    infinite: true,
    arrows:true,
    autoplay:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="home">
        <div className="tophome">
          <h1>Новая коллекция</h1>
          <Link>
            Смотреть Новинки <b>&gt;</b>
          </Link>
        </div>
        <div className="category container">
          <h2>Категории</h2>
          <div className="multiple-items">
            <Slider {...settings}>
            <Link><img src={kurtki} alt="" /></Link>
            <Link><img src={palto} alt="" /></Link>
            <Link><img src={shuba} alt="" /></Link>
            <Link><img src={parki} alt="" /></Link>
            <Link><img src={kurtki} alt="" /></Link>
            <Link><img src={palto} alt="" /></Link>
            <Link><img src={shuba} alt="" /></Link>
            <Link><img src={parki} alt="" /></Link>
            </Slider>
          </div>
        </div>
        <div className="subscribtion">
          <h3>Узнайте  первым о новинках</h3>
          <input type="text" placeholder="Ваш e-mail*" /> <br />
          <button>ПОДПИСАТЬСЯ</button>
          <p>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
