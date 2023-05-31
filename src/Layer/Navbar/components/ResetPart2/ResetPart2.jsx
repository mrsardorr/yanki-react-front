import React, { useState } from 'react'


import "./ResetPart2.scss"

const ResetPart2 = () => {

  const handleEMAIL= (e)=>{
    if(e.target.value.length >=6) {
      setEmaill(true)
    }else{
      setEmaill(false)
    }
  }
  const handlePASS= (e)=>{
    if(e.target.value.length >= 8 && Emaill) {
      setPass(false)
    }else{
      setPass(true)
    }
  }
  const [Emaill,setEmaill] = useState(false)
  const [Pass,setPass] = useState(true)
  
  const [email,setEmail] = useState('')
    const handleSubmit = event => {
      // 👇️ prevent page refresh
      event.preventDefault();
      
      console.log('form submitted ✅ '+ email);
    };
    const [eye,setEye] = useState(true)
    const onklik = ()=>{
        if(eye){
            setEye(false)
        }else{setEye(true)}
    }
  return (
    <div className="modal fade" id="reset2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Забыли пароль?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="/" onSubmit={handleSubmit}>
      <div className="modal-body d-flex flex-column">
        <p>Код из сообщения:</p>
        <input type="text" required placeholder='Код*' onChange={handleEMAIL}/>
        <input type={eye?"password":"text"} required placeholder='Новый пароль*' onChange={handlePASS}/>
        
        <button type="button" className="btn-close eye eye2" onClick={onklik} aria-label="Close"></button>
        
        <button type="submit" disabled={Pass} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reset3" className="btn contin">УСТАНОВИТЬ ПАРОЛЬ</button>
      </div>
      <div className="modal-footer">
      </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default ResetPart2