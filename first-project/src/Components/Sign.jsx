import React from 'react'

const Sign = () => {
  return (
   <>

<div class="bg-image">

<nav class="nav-home">
   <a href="course.html"><i class="fa-solid fa-house fa-xl"></i></a>
   <a href="course.html"><h2>Home</h2></a>

</nav>


<form id="login-form">
    <h1>Learners Login</h1><br/><br/>
    <input type="email" placeholder="Email" required>
    <input type="password" placeholder="Enter your password" required>
    <input type="submit" value="Login" class="login-button" >
    <a href="forgotpassword.html">Forgot Password ?</a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a>Create Account</a>
 </form>   

 </div>
   </>

  )
}

export default Sign
