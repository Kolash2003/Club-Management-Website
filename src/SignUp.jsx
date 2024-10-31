import React, { useState } from 'react';
import Loginpagebg from './assets/Login-page-bg.png';
import CodeChef from './assets/CodeChef.png';
import passwordimg from './assets/Password.png';
import Loginhuman from './assets/Loginhuman.png';
import emailid from './assets/emailid.png';
import regno from './assets/regno.png';

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleRegNumber = (e) => setRegNumber(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-[#E9F1FE] flex items-center justify-center">
        <img src={Loginpagebg} alt="loginpage" className="object-cover w-full h-full" style={{ objectFit: 'contain' }} />
      </div>
      <div className='bg-white rounded-3xl w-1/2 absolute left-1/2 transform -translate-x-1/2 shadow-2xl p-6'>
        <div className='flex justify-center mt-4'>
          <img src={CodeChef} alt="codechef" className="h-44" />
        </div>

        {/* Name Inputs */}
        <div className='flex justify-between items-center p-2'>
          <div className='flex-col w-1/2 pr-2 text-center'>
            <div className='flex items-center gap-x-4 ml-2'>
                <img src={Loginhuman} alt="First Name Icon" />
                <h6>First Name</h6>
            </div>
                <input
                type="text"
                value={firstName}
                onChange={handleFirstName}
                placeholder='First Name'
                className='border-black border-2 w-full pl-2 h-10 rounded-xl'
                />
            </div>
          <div className='flex-col w-1/2 pl-2 text-center'>
            <div className='flex items-center gap-x-4 ml-2'>
                <img src={Loginhuman} alt="Last Name Icon" />
                <h6>Last Name</h6>
            </div>
            <input
              type="text"
              value={lastName}
              onChange={handleLastName}
              placeholder='Last Name'
              className='border-black border-2 w-full pl-2 h-10 rounded-xl'
            />
          </div>
        </div>

        {/* Email */}
        <div className='flex-col items-start p-2'>
          <div className='flex items-center gap-x-4 ml-2'>
            <img src={emailid} alt="emailid" />
            <h6>Email</h6>
          </div>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder='Email'
            className='border-black border-2 w-full pl-2 h-10 rounded-xl mt-1'
          />
        </div>

        {/* Registration Number */}
        <div className='flex-col items-start p-2'>
          <div className='flex items-center gap-x-4 ml-2'>
            <img src={regno} alt="regno" />
            <h6>Registration Number</h6>
          </div>
          <input
            type="text"
            value={regNumber}
            onChange={handleRegNumber}
            placeholder='Registration Number'
            className='border-black border-2 w-full pl-2 h-10 rounded-xl mt-1'
          />
        </div>

        {/* Password Inputs */}
        <div className='flex justify-between items-center p-2'>
          <div className='flex-col w-1/2 pr-2 text-center'>
            <div className='flex items-center gap-x-4'>
              <img src={passwordimg} alt="password" />
              <h6>Password</h6>
            </div>
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder='Password'
              className='border-black border-2 w-full pl-2 h-10 rounded-xl mt-1'
            />
          </div>
          <div className='flex-col w-1/2 pl-2 text-center'>
            <div className='flex items-center gap-x-4'>
              <img src={passwordimg} alt="confirm password" />
              <h6>Confirm Password</h6>
            </div>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              placeholder='Confirm Password'
              className='border-black border-2 w-full pl-2 h-10 rounded-xl mt-1'
            />
          </div>
        </div>

        {/* Signup Button */}
        <div className='flex justify-center mt-6'>
          <div className='flex-col items-center p-4 shadow-2xl rounded-3xl bg-[#4079DA] w-4/5'>
            <div className='flex justify-center text-white'>
              <p>SIGN UP</p>
            </div>
          </div>
        </div>

        {/* Link to Login */}
        <div className='flex justify-center mt-6'> 
          <div className='flex gap-x-2'>
            <p>Already have an Account?</p>
            <p className='font-bold'>Log In</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
