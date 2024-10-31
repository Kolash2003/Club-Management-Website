import React, { useState } from 'react';
import Loginpagebg from './assets/Login-page-bg.png';
import loginhuman from './assets/Loginhuman.png';
import CodeChef from './assets/CodeChef.png';
import passwordimg from './assets/Password.png';
import checkbox from './assets/checkbox.png';

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-[#E9F1FE] flex items-center justify-center">
        <img src={Loginpagebg} alt="loginpage" className="object-cover w-full h-full" style={{ objectFit: 'contain' }} /> {/* Changed objectFit to contain */}
      </div>
      <div className='bg-white rounded-3xl h-3/4 w-1/3 absolute top-28 left-1/2 transform -translate-x-1/2 shadow-2xl'> {/* Centering the white box */}
        <div className='flex justify-center mt-4'> {/* Centering the CodeChef image */}
          <img src={CodeChef} alt="codechef" className="h-44" /> {/* Adjust height as needed */}
        </div>
        <div className='flex-col items-center p-4'> {/* Added padding for spacing */}
          <div className='flex h-6 gap-x-4 ml-16 pl-2'>
            <img src={loginhuman} alt="human" />
            <h6>Email</h6>
          </div>
          <input
            type="text"
            value={email}
            onChange={handleEmail}
            placeholder='Email'
            className='border-black border-2 w-3/4 pl-2  h-10 rounded-xl'
          />
        </div>
        <div className='flex-col items-center p-4'> {/* Added padding for spacing */}
          <div className='flex h-6 gap-x-4 ml-16 pl-2'>
            <img src={passwordimg} alt="password" />
            <h6>Password</h6>
          </div>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder='Passowrd'
            className='border-black border-2 w-3/4 pl-2 h-10 rounded-xl'
          />
        </div>

        <div className='flex justify-evenly mb-4 mt-6'>
            <div className='flex space-x-1'>
                <input type="checkbox"/>
                <p>Remember Me</p>
            </div>
            <div>
                <p>Forgot Password?</p>
            </div>
        </div>

        <div className='flex justify-center'>
            <div className='flex-col items-center p-4 shadow-2xl rounded-3xl bg-[#4079DA] w-4/5'> {/* Added padding for spacing */}
            <div className='flex justify-center text-white'>
                <p>LOG IN</p>
            </div>
            </div>
        </div>

        <div className='flex justify-evenly mt-6'> 
            <div className='flex gap-x-2'>
                <p>Don't have an Account?</p>
                <p className='font-bold'>Sign Up</p>
            </div>
        </div>


      </div>
    </>
  );
}

export default Login;
