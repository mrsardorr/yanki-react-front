import React, { useState } from 'react'
import axios from "../../../../api/axios"


import "./Register.scss"

const Register = () => {
  const [success,setSuccess] = useState(false)

  const reglink = "/api/auth/register"

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
    seteassword(e.target.value)
    if(e.target.value.length >= 8 && Email) {
      setPass(false)
    }else{
      setPass(true)
    }
  }
  const [Email,setEmail] = useState(false)
  const [Pass,setPass] = useState(true)
  const [email,setemail] = useState('')
  const [password,seteassword] = useState('')


  const [emaill,setEmaill] = useState('')
    const handleSubmit = (e) => {
      // 👇️ prevent page refresh
      e.preventDefault();
      try {
        const response = axios.post(reglink,
          JSON.stringify({email,password}),
          {
            headers:{'Content-type':'application/json'},
            withCredentials:true
          })
          setSuccess(true)
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    };
    const [eye,setEye] = useState(true)
    const onklik = ()=>{
        if(eye){
            setEye(false)
        }else{setEye(true)}
    }
  return (
    <div className="modal fade" id="register" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Регистрация</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="/" onSubmit={handleSubmit}>
      <div className="modal-body d-flex flex-column">
        <input type="email" required placeholder='Ваш e-mail*' onChange={handleEMAIL}/>
        <input type={eye?"password":"text"} required placeholder='Ваш пароль*' onChange={handlePASS}/>
        
        <button type="button" className="btn-close eye" onClick={onklik} aria-label="Close"></button>
        
        <button type="submit" disabled={Pass} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#RegisterPart2" className="btn contin">Продолжить</button>
      </div>
      <div className="modal-footer">
      </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Register