import React from 'react'

const Sign = () => {
  return (
   <>

 <div className='bg-image'>
   <nav className='nav-home'>
   <a href='course.html'><i class="fa-solid fa-house fa-xl"></i></a>
   <a href='course.html'><h2>Home</h2></a>
   </nav>

   <form id='login-form'>
      <h1>Learners Login</h1>
      <input type='email' placeholder='Email' required/>
      <input type='password' placeholder='Enter your password' required/>
      <input type='submit' value="login" className='login-button'/>
      <a href='forgotpassword.html'>Forget Password</a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='signup.html'>Create Account</a>

   </form>
 </div>
   </>

  )
}

export default Sign
