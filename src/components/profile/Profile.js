"use client";
import React, { useEffect, useState } from "react";
import style from "./Proflie.module.css";
import configuration from "./configuration.json";
import { Input } from "@/common/resuableComponent/Input";
import {
  validateForm,
  validateInputControl,
} from "@/common/validations/validation";
import { Textarea } from "@/common/resuableComponent/Textarea";
import { Select } from "@/common/resuableComponent/Select";
import axios from "axios";
import { Cookie } from "@/common/api/Cookies";

const Profile = () => {
  const [inputControls, setInputControls] = useState(configuration);
  useEffect(() => {
    debugger;
    async function getUserById() {
      const data = document.cookie;
      // Split the string by ';'
      const parts = data.split(";");

      // Further split by '=' to get key-value pairs
      const idValue = parts[0].split("=")[1].trim();
      const tokenValue = parts[1].split("=")[1].trim();
      const res = await axios.get(
        `http://localhost:2020/std/get-user-by-id?id=${idValue}`,
        {
          headers: {
            Authorization: tokenValue,
          },
        }
      );
      //   console.log(res);
      const UserInfo = res?.data?.[0];
      const clonedInputControls = JSON.parse(JSON.stringify(inputControls));
      clonedInputControls?.forEach((obj) => {
        obj.value = UserInfo[obj.name];
      });
      setInputControls(clonedInputControls);
    }
    getUserById();
  }, []);
  const handelChange = (eve) => {
    validateInputControl(eve, inputControls, setInputControls);
  };
  const handleUpdate = () => {};
  const handleTerminate = () => {};
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
          <button className="btn btn-primary m-2" onClick={handleUpdate}>
            update
          </button>
          <button className="btn btn-primary" onClick={handleTerminate}>
            Terminate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
