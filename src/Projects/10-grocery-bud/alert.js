import React, { useEffect } from 'react'

const Alert = ({type,msg,removeAlert}) => {
  useEffect(()=>{
    let timeOut= setTimeout(removeAlert, 3000,false);
    return ()=>clearTimeout(timeOut);
  })

  return <p className={`alert alert-${type}`} >{msg}</p>
}

export default Alert