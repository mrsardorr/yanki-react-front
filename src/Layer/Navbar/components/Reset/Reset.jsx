import React, { useState } from 'react'


import "./Reset.scss"

const Reset = () => {

  const emregex=/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const handleEMAIL= (e)=>{
    if(e.target.value.match(emregex)!=null) {
      setEmaill(false)
    }else{
      setEmaill(true)
    }
  }
  
  const [Emaill,setEmaill] = useState(true)

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
    <div className="modal reset fade" id="reset" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Забыли пароль?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="/asd" onSubmit={handleSubmit}>
      <div className="modal-body d-flex flex-column">
        <p>Введите свою почту и мы отправим вам код для сброса пароля и восстановления аккаунта:</p>
        <input type="email" required placeholder='Ваш e-mail*' onChange={event => setEmail(event.target.value)} onKeyUp={handleEMAIL}/>
        
        <button type="submit" disabled={Emaill} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#reset2" className="btn contin">Продолжить</button>
      </div>
      <div className="modal-footer">
      </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Reset