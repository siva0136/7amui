import React, { Fragment } from "react";

const Input = ({
  label,
  readonly,
  errMsg,
  type,
  isShowError,
  values,
  handelChange,
  name,
  value,
  options,
}) => {
  const fnPrepareInputControls = () => {
    switch (type) {
      case "text":
      case "password":
      case "number":
        return (
          <input
            disabled={readonly}
            value={value}
            name={name}
            onChange={handelChange}
            className="form-control"
            type={type}
          />
        );
      case "radio":
        return (
          <div>
            {options?.map((val, index) => {
              return (
                <Fragment key={`div_${index}`}>
                  <input
                    checked={values[index] === value}
                    onChange={handelChange}
                    type={type}
                    name={name}
                    value={values[index]}
                  />
                  <span className="p-2">{val}</span>
                </Fragment>
              );
            })}
          </div>
        );
      case "checkbox":
        return (
          <div>
            {options?.map((val, index) => {
              return (
                <Fragment key={`div_${index}`}>
                  <input
                    checked={value.includes(values[index])}
                    onChange={handelChange}
                    type={type}
                    name={name}
                    value={values[index]}
                  />
                  <span className="p-2">{val}</span>
                </Fragment>
              );
            })}
          </div>
        );
    }
  };
  return (
    <div className="row pb-3">
      <div className="col-sm-5 text-end">
        <label>{label}</label>
      </div>
      <div className="col-sm-3">
        {fnPrepareInputControls()}
        {/* <input value={value} name={name} onChange={handelChange} className='form-control' type={type} /> */}
      </div>
      <div className="col-sm-2">
        {isShowError && <b className="text-danger">{errMsg}.</b>}
      </div>
    </div>
  );
};

export default Input;
