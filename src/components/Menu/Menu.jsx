"use client"
import React, { useState } from 'react'
import style from './Menu.module.css'
import Link from 'next/link'
import  menuItems from './includes/MenuItems'
import { usePathname } from 'next/navigation' // by using usePathname we can get the pathName('/')

const Menu = () => {
    const pathName=usePathname()
    const[menuItem,setMenuItem]=useState(pathName?.slice(1)||'home');   
    const fnMenuClick =(path)=>{
        setMenuItem(path)
    }
  return (
    <div className={style.menu}>
        {
            menuItems?.map(({path,text},index)=>{
                return <Link onClick={()=>fnMenuClick(path)} key={`link_${index}`}  href={`/${path}`} className={menuItem===path ? style.menuActive :""}>{text}</Link>
            })
        }
        
    </div>
  )
}

export default Menu
