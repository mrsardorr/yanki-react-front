import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  YANKI,
  YANKI1,
} from "../../Assets/Navbar/index";
import Like from "../../Assets/Navbar/like";
import Person from "../../Assets/Navbar/persn";
import Search from "../../Assets/Navbar/search";
import Shop from "../../Assets/Navbar/shop";
import Three from "../../Assets/Navbar/three";
import X from "../../Assets/Navbar/X";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RegisterPart2 from "./components/RegisterPart2/RegisterPart2";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";
import Reset from "./components/Reset/Reset";
import ResetPart2 from "./components/ResetPart2/ResetPart2";
import ResetPart3 from "./components/ResetPart3/ResetPart3";
import "./Navbar.scss";
import useAuth from "../../hooks/useAuth";

const Navbar = (props) => {
    const {auth} = useAuth()

    const location = useLocation();
    // console.log(location.pathname)
  const [home , isHome] = useState(false)
  useEffect(()=>{
    if(location.pathname === '/'){
        isHome(true)
    }else{
        isHome(false)
    }
  },[location.pathname])
    
  const [retun, isRetun] = useState(false);
  const onclik = () => {
    if (!retun) {
      isRetun(true);
    } else {
      isRetun(false);
    }
  };
  return (
    <>
    <nav>
      <div className="container d-flex justify-content-between align-items-center">
        <button onClick={onclik}>
        <Three style={{display: home ? "block" : "none" ,display: retun ? "none" : "block", }} colr={home?"white":"#E0BEA2"}/>
          <X style={{ display: retun ? "block" : "none" }} colr={home?"white":"#E0BEA2"}/>
        </button>
        <ul>
          <li>
            <NavLink to="/admin" style={{ display: retun ? "none" : "block",color:home?"white":"#252525" }}>ADMIN</NavLink>
          </li>
          <li>
            <NavLink to="/catalog" style={{ display: retun ? "none" : "block",color:home?"white":"#252525"  }}>
              КАТАЛОГ
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={{ display: retun ? "none" : "block",color:home?"white":"#252525"  }}>
              О НАС
            </NavLink>
          </li>
          <li>
            <NavLink to="/howtopay" style={{ display: retun ? "block" : "none",color:home?"white":"#252525"  }}>
              ОПЛАТА И ДОСТАВКА
            </NavLink>
          </li>
          <li>
            <NavLink to="/return" style={{ display: retun ? "block" : "none",color:home?"white":"#252525"  }}>
              УСЛОВИЯ ВОЗВРАТА
            </NavLink>
          </li>
          <li>
            <NavLink style={{ display: retun ? "block" : "none",color:home?"white":"#252525"  }} to="/contacts">
              КОНТАКТЫ
            </NavLink>
          </li>
        </ul>
        <Link to="/">
          <img src={YANKI} alt="" style={{display: home ? "block" : "none" }} />
          <img src={YANKI1} alt="" style={{display: home ? "none" : "block" }} />
        </Link>
        <div className="d-flex " >
          <select style={{ display: retun ? "none" : "block",color:home?"white":"#252525" }}>
            <option value="1">RU</option>
            <option value="1">UA</option>
            <option value="1">EN</option>
          </select>
          <select style={{ display: retun ? "none" : "block",color:home?"white":"#252525" }}>
            <option value="1">UAH</option>
            <option value="1">USD</option>
            <option value="1">EUR</option>
          </select>
        </div>
        <div className="naved">
          <Link>
            <Search colr={home?"white":"black"}/>
          </Link>

          {
            JSON.stringify(auth).length>3
            ?
            <Link to="cabinet">
            <Person colr={home?"white":"#E0BEA2"}/>
          </Link>
            :
            <Link data-bs-toggle="modal" data-bs-target="#login">
            <Person colr={home?"white":"#E0BEA2"}/>
          </Link>
          }

          <Link to="favourite">
            <Like colr={home?"white":"#E0BEA2"}/>
          </Link>
          <Link to="korzina">
            <Shop colr={home?"white":"#E0BEA2"}/>
          </Link>
          <Login/>  
          <Register/>
          <RegisterPart2/>
          <RegisterSuccess/>
          <Reset/>
          <ResetPart2/>
          <ResetPart3/>
        </div>
      </div>
    </nav>
      </>
  );
};

export default Navbar;
