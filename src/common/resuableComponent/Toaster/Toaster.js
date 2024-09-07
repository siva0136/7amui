import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import style from './Toaster.module.css'
const Toaster = ({msg,bgcolor}) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        setTimeout(()=>{
            dispatch({
                type:"TOASTER",
                payload:{isShowToaster:false, message:"", bgColor:""}
            })
        },3000)
    },[])
  return (
    <div style={{background:bgColor}} className={style.toaster}>
      {msg}
    </div>
  )
}

export default Toaster
