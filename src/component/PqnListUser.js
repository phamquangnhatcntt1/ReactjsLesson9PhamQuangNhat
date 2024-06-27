import React from 'react'

export default function PqnListUser({renderPqnListUser}) {
    console.log("PqnListUser:",renderPqnListUser);
    let pqnElementUser = renderPqnListUser.map((pqnUser,index)=>{
  return (
    <>
        <tr>
            <td>{pqnUser.id}</td>
            <td>{pqnUser.Username}</td>
            <td>{pqnUser.Password}</td>
            <td>{pqnUser.Email}</td>
            <td>{pqnUser.phone}</td>
            <td>...</td>
        </tr>
    </>
  )
})
return (
    <div className='row'>
        <div className='col-md-12'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>

                {pqnElementUser}

            </tbody>
        </table>

        </div>

      
    </div>
  )
}
