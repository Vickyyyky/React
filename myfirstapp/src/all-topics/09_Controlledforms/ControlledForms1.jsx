import React, { useState } from 'react'

const ControlledForms1 = () => {
    let [username,setusername]=useState("")
     let [useremail,setuseremail]=useState("")
      let [userpassword,setuserpassword]=useState("")

      let handleUsername=(e) =>setusername(e.target.value)
      
      let handleUseremail=(e) =>{setuseremail(e.target.value)}
      let handleUserpassword=(e) =>{setuserpassword(e.target.value)}

      let formHandle=(e)=>{
        e.preventDefault();
        console.log({username,useremail,userpassword});
        setuseremail("")
        setusername("")
        setuserpassword("")
      }
  return (
    <div>
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={handleUsername}/>
            <br/>
             <label htmlFor="email">Useremail:</label>
            <input type="text" id="email" value={useremail} onChange={handleUseremail}/>
            <br/>
            <label htmlFor="password">Userpassword:</label>
            <input type="text" id="password" value={userpassword} onChange={handleUserpassword}/>
            <br/>
            <button type="submit"onClick={formHandle}>Submit</button>
        </form>
    </div>
  )
}

export default ControlledForms1