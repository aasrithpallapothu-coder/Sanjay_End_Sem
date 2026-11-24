import { useState } from 'react';

function App(){
  const[username, setUsername]=useState("");
  const[password, setPassword]=useState("");
  const[message, setMessage]=useState("");

  function login(){
    if(username==="admin" && password==="1234"){
      setMessage("Login successful!");
    }else{
      setMessage("Invalid username or password.");
    }
  }

  return(
    <div>
      <h1>Login Form</h1>

      <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={login}>Login</button>

      <h3>{message}</h3>
    </div>
  );
}

export default App;