import React, { useState } from 'react'
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
        <Header /> 
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg" alt='logo' ></img>
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sing In" : "Sign Up"}</h1>
           {!isSignInForm && (<input 
            type="text"
            placeholder='Full Name'
            className='w-full p-4 my-4 bg-gray-800'/> )}
            <input 
            type="text"
            placeholder='Enter Email'
            className='w-full p-4 my-4 bg-gray-800'/>
            <input 
            type="password" 
            placeholder="Password" 
            className="p-4 my-4 w-full bg-gray-800"/>
           <button className='bg-red-700 p-4 my-4 w-full rounded-lg'>{isSignInForm ? "Sing In" : "Sign Up"} </button>
           <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
           {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered ? Sign In Now"}</p>
        </form>
    </div>
  );
};

export default Login;