import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "../../api/axios";
import To from "../../Assets/Navbar/link";
import useAuth from "../../hooks/useAuth";
import "./Cabinet.scss";

const updlink = "/api/auth/update"

const Cabinet = () => {
  const {auth} = useAuth()

  const [name,setName] = useState(`${auth?.user?.name}`)
  const [surname,setSurName] = useState(`${auth?.user?.surname}`)
  const [email,setEmail] = useState(`${auth?.user?.email}`)
  const [number,setNumber] = useState(`${auth?.user?.phone}`)
  const [country,setCountry] = useState(`${auth?.user?.country}`)
  const [address,setAddress] = useState(`${auth?.user?.address}`)
  

  const nameHandler = (e)=>{
    setName(e.target.value)
  }
  const surNameHandler = (e)=>{
    setSurName(e.target.value)
  }
  const emailHandler = (e)=>{
    setEmail(e.target.value)
  }
  const numberHandler = (e)=>{
    setNumber(e.target.value)
  }
  const countryHandler = (e)=>{
    setCountry(e.target.value)
  }
  const addressHandler = (e)=>{
    setAddress(e.target.value)
  }



  const onSumbitHandler = (e)=>{
    e.preventDefault();
    try {
      const response = axios.post(updlink,
        JSON.stringify({name,surname,email,phone:number,country,address,id:auth?.user?._id}),
        {
          headers:{'Content-type':'application/json'},
          withCredentials:true
        })
    } catch (err) {
      console.log(err)
    }
  }
  console.log(address)
  return (
    <div className="about cabinet">
      <div className="container">
        <div className="urls d-flex align-items-center">
          <Link to="/">Главная</Link> <To />{" "}
          <Link to="/cabinet">Личный кабинет</Link>
        </div>
        <div className="nav-cb">
          <NavLink to="/history">История заказов</NavLink>
          <NavLink>Личные данные</NavLink>
          <a href="/">Выйти</a>
        </div>
        <h2>Персональные данные:</h2>
        <div className="d-flex pers">
          <input type="text" defaultValue={name} onChange={nameHandler}/>
          <input type="text" defaultValue={surname} onChange={surNameHandler}/>
          <input type="text" defaultValue={email} onChange={emailHandler}/>
          <input type="text" defaultValue={number} onChange={numberHandler}/>
        </div>
        <h2>Адрес доставки:</h2>
        <div className="d-flex dost">
          <input type="text" defaultValue={country} onChange={countryHandler}/>
          <input type="text" defaultValue={address} onChange={addressHandler}/>
        </div>
        <form method="get" onSubmit={onSumbitHandler}>
          <button>ОБНОВИТЬ ИНФОРМАЦИЮ</button>
        </form>

          </div>
        </div>
  );
};

export default Cabinet;
