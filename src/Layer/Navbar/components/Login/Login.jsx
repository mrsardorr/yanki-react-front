import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'
import "./Login.scss"
import axios from '../../../../api/axios'

const loginUrl = '/api/auth/login'

const Login = () => {
  const {auth,setAuth}= useAuth();
  const [success,setSuccess] = useState(false)



  const emregex=/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const handleEMAIL= (e)=>{
    setemail(e.target.value)
    if(e.target.value.match(emregex)!=null) {
      setEmail(true)
    }else{
      setEmail(false)
    }
  }
  const handlePASS= (e)=>{
    setpassword(e.target.value)
    if(e.target.value.length >= 8 && Email) {
      setPass(false)
    }else{
      setPass(true)
    }
  }
  const [Email,setEmail] = useState(false)
  const [Pass,setPass] = useState(true)
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [eye,setEye] = useState(true)
  const onklik = ()=>{
      if(eye){
          setEye(false)
      }else{setEye(true)}
  }

  const sumbHandler = async (e)=>{
    e.preventDefault();

    try {
      const response = await axios.post(loginUrl,
        JSON.stringify({email,password}),
        {
          headers:{'Content-type':'application/json'},
          withCredentials:true
        }
        );
        const user = response?.data?.user
        const accessToken = response?.data?.token
        const roles = response?.data?.user?.roles
        setAuth({user,roles,accessToken})
        setSuccess(true)

    } catch (err) {
      
      console.log(err)
    }
    
  }


  return (
    <div className="modal lgin fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Авторизация</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onSubmit={sumbHandler}>
      <div className="modal-body d-flex flex-column">
        <input type="email" required placeholder='Ваш e-mail*' onChange={handleEMAIL}/>
        <input type={eye?"password":"text"} required placeholder='Ваш пароль*' onChange={handlePASS}/>
        
        <button type="button" className="btn-close eye" onClick={onklik} aria-label="Close"></button>
        <div className="d-flex modal-links">
          <Link data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reset" >Забыли пароль?</Link>
          <Link data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#register">Нет аккаунта?</Link>
        </div>
        <button type="submit" data-bs-dismiss={success?"modal":"error;)"} disabled={Pass} className="btn contin">Войти</button>
      </div>
      <div className="modal-footer">
      </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login