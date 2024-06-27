import React, { useEffect, useState } from 'react'
import PqnListUser from './component/PqnListUser';
import axios from './api/pqnApi'
export default function PqnApp() {

  const [pqnListUser,setPqnListUser] = useState([]);

const pqnGetAllUsers =async ()=>{
  const pqnResponce =await axios.get("pqnUsers");
  console.log("Api Data:",pqnResponce.data);
  setPqnListUser(pqnResponce.data)
}

useEffect(()=>{
  pqnGetAllUsers();
},[])
  return (
    <div className='container border my-3 '>
      <h1>Làm việc với Mockapi</h1>
      <hr/>
      <PqnListUser renderPqnListUser={pqnListUser}/>
    </div>
  )
}
