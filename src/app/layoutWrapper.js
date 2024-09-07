"use client"
import { Inter } from "next/font/google";
// import "./globals.css";
// import {  Provider  } from "react-redux";
// import { appStore } from "@/redux/store/appStore";
import { useSelector } from "react-redux";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Home from "@/components/Home";



export default function RootLayoutWapper({ children }) {
 
  const isLoggedIn = useSelector((state) => {   
    return state.appReducer?.isLoggedIn
  })
  return (
    <div>
      <Header></Header>
      {isLoggedIn && <Menu />}      
      {children}
      <Footer />
    </div>
  );
}

