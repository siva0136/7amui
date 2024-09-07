import React from 'react'
import style from './Select.module.css'
const Select = ({label,errMsg,isShowError,handelChange,name,value,values,options}) => {
    return (
      <div className='row pb-3'>
          <div className='col-sm-5 text-end'>
              <label>{label}</label>
          </div>
          <div className='col-sm-3'>
            <select className='form-control' onChange={handelChange} value={value} name = {name}>
              <option value=''>Select </option>
                {
                    options.map((val,index)=>{
                        return <option value = {values[index]} key={`option_${index}`}>{val}</option>
                    })
                }
            </select>              
          </div>
          <div className='col-sm-2'>
            {
              isShowError &&<b className='text-danger'>{errMsg}.</b>
            }
              
          </div>
        </div>
    )
  }

export default Select
