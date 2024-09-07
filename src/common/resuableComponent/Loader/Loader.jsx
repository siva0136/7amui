import React from 'react'
import style from './Loader.module.css'
import Image from 'next/image'
const Loader = () => {
  return (
    <>
     <div className={style.mask}>
      
      </div>
      <Image       
      src="/preloader.gif"
      width={100}
      height={100}
      alt="Loader ...."
    />
    </>
   
  )
}

export default Loader
