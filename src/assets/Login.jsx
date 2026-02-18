import React, { useState } from 'react'

const Login = () => {
  const [data,setdata] = useState(true)
  const [user,setUser] = useState("")


  const alertmessage = () => {
    if (user !== "") {
      alert("Form has been submitted " + user);
      setUser("");
    } else {
      alert("Please enter your name");
    }
  };
  return (
    <div className='main-form'>
      <div className='form'>
        <div>
          <label htmlFor="username">Username : </label>
          <input type="text" placeholder='Enter a Name' className='input512'  max={50} onChange={((e)=>setUser(e.target.value))}/>
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input type="email" placeholder='Enter a Email' className='input512'/>
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input type="password" placeholder='Enter  a Password'  className='input512'/>
        </div>

        <div>
          <button className='btn' onClick={alertmessage}>Submit</button>
          <button className='btn'>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default Login
