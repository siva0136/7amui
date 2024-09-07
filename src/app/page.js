"use client"
import Login from "@/components/Login";
import Image from "next/image";
import { connect, useSelector } from "react-redux";
// import styles from "./page.module.css";
import Home from "@/components/Home";
let  App = ()=> {    
  const isLoggedIn = useSelector((state) => {      
    return state.appReducer?.isLoggedIn
  })
  return (
    <div>
      {isLoggedIn ? <Home/> : <Login/>}
    </div>
  );
}

// App = connect(
//   (state) => {    
//     return ({
//       isLoggedIn:state.appReducer?.isLoggedIn
//     })
//   }
// )(App)
export default App