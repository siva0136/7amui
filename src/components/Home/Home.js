"use client";
import React, { useEffect } from "react";
import style from "./Home.module.css";
import ServerCall from "@/common/api/ServerCall";
import { Cookie } from "@/common/api/Cookies";
import { useSelector } from "react-redux";
import axios from "axios";
// import { headers } from "next/headers";

// import { headers } from "next/headers";

const Home = () => {
  // useEffect(() => {
  //   fnGetStudent();
  // }, []);
  const fnGetStudent = async () => {
    debugger;
    const str = document.cookie;
    const value = str.split("=")[1];
    const res = await axios.get("http://localhost:2020/std/get-std", {
      headers: {
        Authorization: value,
      },
    });
    console.log(res);
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={fnGetStudent}>Get Student</button>
    </div>
  );
};

export default Home;
