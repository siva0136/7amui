import React from 'react'
import style from './Textarea.module.css'

const Textarea = ({label,errMsg, isShowError,handelChange,name,value}) => {
  return (
    <div className='row pb-3'>
        <div className='col-sm-5 text-end'>
            <label>{label}</label>
        </div>
        <div className='col-sm-3'>
            <textarea value={value} name = {name} onChange={handelChange} className='form-control'></textarea>           
        </div>
        <div className='col-sm-2'>
          {
            isShowError &&<b className='text-danger'>{errMsg}.</b>
          }
            
        </div>
      </div>
  )
}

export default Textarea
