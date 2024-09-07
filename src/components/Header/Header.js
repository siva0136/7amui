"use client"
import React from 'react'
import style from './Header.module.css'
const Header = () => {
  return (
    <div className={`text-center bg-primary text-white py-2 ${style.header}`}>
      End to End Application
    </div>
  )
}

export default Header
