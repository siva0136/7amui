"use client";
import React, { useState } from "react";
import style from "./Login.module.css";
import { Input } from "@/common/resuableComponent/Input";
import inputControls from "./configuration.json";
import {
  validateInputControl,
  validateForm,
} from "@/common/validations/validation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import ServerCall from "@/common/api/ServerCall";
import { useRouter } from "next/navigation";
import { Cookie } from "@/common/api/Cookies";
const Login = () => {
  const router = useRouter();
  const [inputControlsArr, setInputControlsArr] = useState(inputControls);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const [isFormInvalid, dataObj] = validateForm(
        inputControlsArr,
        setInputControlsArr
      );
      if (isFormInvalid) {
        return;
      }

      const res = await ServerCall.sendPostReq(
        "http://localhost:2020/std/login",
        { data: dataObj }
      );
      router.push("/");
      debugger;
      if (res.data?.length > 0) {
        Cookie.setCookie("token", res?.data[0]?.token);
        Cookie.setCookie("id", res?.data[0]?._id);
        dispatch({
          type: "LOGIN",
          payload: { isLoggedIn: true, user: res.data[0] },
        });
        console.log(res.data);
      } else {
        alert("please check for userName and TPWD");
      }

      // console.log(res.data)
    } catch (e) {
      alert(e);
    } finally {
      // dispatch({
      //   type:'LOGIN',
      //   payload:{isLoggedIn:true}
      // });
    }
  };
  const handelChange = (eve) => {
    validateInputControl(eve, inputControlsArr, setInputControlsArr);
    // clearTimeout(ref.current)
    // ref.current = setTimeout(() => {
    //   validateInputControl(eve, inputControlsArr, setInputControlsArr);
    // }, 100)
  };
  return (
    <div className="container-fluid">
      <h3 className="text-center py-2">Login</h3>
      {inputControlsArr?.map((obj, index) => {
        return (
          <Input key={`Input_${index}`} {...obj} handelChange={handelChange} />
        );
      })}
      <div className="row">
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
          <Link href={"/register"} className="px-2">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
