import React, { useState } from 'react'


import "./ResetPart3.scss"

const ResetPart3 = () => {
    const [eye,setEye] = useState(true)
    const onklik = ()=>{
        if(eye){
            setEye(false)
        }else{setEye(true)}
    }
  return (
    <div className="modal reset3 fade" id="reset3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel"></h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body d-flex flex-column">
        <p>Вы успешно сменили пароль!</p>
      </div>
      <div className="modal-footer">
      </div>
    </div>
  </div>
</div>
  )
}

export default ResetPart3