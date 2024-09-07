"use client";
import React, { useState } from "react";
import style from "./Register.module.css";
import configuration from "./configuration.json";
import { Input } from "@/common/resuableComponent/Input";
import {
  validateForm,
  validateInputControl,
} from "@/common/validations/validation";
import { Textarea } from "@/common/resuableComponent/Textarea";
import { Select } from "@/common/resuableComponent/Select";
import Link from "next/link";
import ServerCall from "@/common/api/ServerCall";

const Register = () => {
  const [inputControls, setInputControls] = useState(configuration);
  const handelChange = (eve) => {
    validateInputControl(eve, inputControls, setInputControls);
  };
  const handleRegister = () => {
    debugger;
    const [isFormInvalid, dataObj] = validateForm(
      inputControls,
      setInputControls
    );
    if (isFormInvalid) return;
    console.log(dataObj);
    ServerCall.sendPostReq("http://localhost:2020/std/reg-std", {
      data: dataObj,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        console.log("finally");
      });
  };
  return (
    <div className="container-fluid mb-5">
      <h3 className="text-center py-2">Register</h3>
      {inputControls?.map((obj, index) => {
        switch (obj.tag) {
          case "input":
            return (
              <Input
                key={`Input_${index}`}
                {...obj}
                handelChange={handelChange}
              />
            );
          case "select":
            return (
              <Select
                key={`select${index}`}
                {...obj}
                handelChange={handelChange}
              />
            );
          case "textarea":
            return (
              <Textarea
                key={`teaxtarea${index}`}
                {...obj}
                handelChange={handelChange}
              />
            );
        }
      })}
      <div className="row">
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleRegister}>
            Register
          </button>
          <Link href="/login" className="px-2">
            {" "}
            Go To Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
