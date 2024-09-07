export const regEXP={
    "REQUIRED":(val,inputControlObj)=>{       
        const exp = /\S/
        if(!exp.test(val)){
            return `Please Enter ${inputControlObj.label}`
        }       
        
    },
    "EMAIL":(val)=>{
        const exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!exp.test(val)){
            return "Please Enter valid email"
        } 
    },
    "MIN5CHARS":(val)=>{
        const exp = /\S{5,}/
        if(!exp.test(val)){
            return "Should Min 5 chars"
        } 
    }
}
const setErrorMsg =(criteria,inputControlObj,value)=>{
    for (let i = 0; i < criteria?.length; i++) {
        const regExFn = regEXP[criteria[i]];
        const errMsg= regExFn(value,inputControlObj);
        if (errMsg) {
          inputControlObj.errMsg=errMsg;
          inputControlObj.isShowError = true;
          break;
        }
      }
}
export const validateInputControl=(eve,inputControlsArr,setInputControlsArr)=>{
    const { name, value, type, checked } = eve?.target;
    const cloneinputControlsArr = JSON.parse(JSON.stringify(inputControlsArr))
    const inputControlObj = cloneinputControlsArr.find((obj) => {
      return obj.name === name
    })
    inputControlObj.isShowError = false;    
    if(type === 'checkbox'){        
        const checckedValues = inputControlObj.value ? inputControlObj.value.split(',') : [];
        if(checked){
            checckedValues.push(value)
        }else{
           const index = checckedValues.indexOf(value);
           checckedValues.splice(index,1) 
        }
        inputControlObj.value = checckedValues.join();
    }else{
        inputControlObj.value = value;
    }
   
    const { criteria } = inputControlObj;
    setErrorMsg(criteria,inputControlObj,value)
    setInputControlsArr(cloneinputControlsArr)
}

export const validateForm=(inputControlsArr,setInputControlsArr)=>{
    const dataObj = {}
    const cloneinputControlsArr = JSON.parse(JSON.stringify(inputControlsArr))
    cloneinputControlsArr.forEach(inputControlObj => {
        const {value,criteria,name}=inputControlObj;
        dataObj[name]=value;
        inputControlObj.isShowError = false;
        inputControlObj.errMsg = "";
        setErrorMsg(criteria,inputControlObj,value)       
    });
    const isFormInvalid= cloneinputControlsArr.some((obj)=>{
        return obj.errMsg
    })
    setInputControlsArr(cloneinputControlsArr);
    return [isFormInvalid,dataObj]
}