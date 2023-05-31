import React, { useState } from 'react'


import "./RegisterPart2.scss"

const RegisterPart2 = () => {

  
  const handleCode= (e)=>{
    if(e.target.value.length >= 6) {
      setCODE(false)
    }else{
      setCODE(true)
    }
  }
  const [Code,setCODE] = useState(true)

  
    const [emailL,setEmailL] = useState('')
    const handleSubmit = event => {
      // 👇️ prevent page refresh
      event.preventDefault();
      
      console.log('form submitted ✅ '+ emailL);
    };
    const [eye,setEye] = useState(true)
    const onklik = ()=>{
        if(eye){
            setEye(false)
        }else{setEye(true)}
    }
  return (
    <div className="modal reset fade" id="RegisterPart2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Регистрация - шаг 2</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="/asd" onSubmit={handleSubmit}>
      <div className="modal-body d-flex flex-column">
        <p>Мы отправили вам на почту код для подтверждения регистации. Введите его, пожалуйста</p>
        <input type="text" required placeholder='Код с e-mail*' onChange={event => setEmailL(event.target.value)} onKeyUp={handleCode} />
        
        <button type="submit" disabled={Code} data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#RegisterSuccess" className="btn contin">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </div>
      <div className="modal-footer">
      </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default RegisterPart2