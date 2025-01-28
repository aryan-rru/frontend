import React, { useState } from 'react';
import { InputBox } from './InputBox';

export function Toogle() {
  const [isToggled, setIsToggled] = useState(true);
  return (
    <>
    
    <div className="flex flex-row items-center justify-center gap-4">
      <div className="text-sm">
        Login as Patient
      </div>
      <div>
        <button
          onClick={() => setIsToggled(!isToggled)}
          className={`w-16 h-8 flex items-center rounded-full p-1 transition duration-300 ${
            isToggled ? 'bg-[#ff7b54]' : 'bg-gray-300'
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition duration-300 ${
              isToggled ? 'translate-x-8' : 'translate-x-0'
            }`}
          ></div>
        </button>
      </div>
      <div className="text-sm">
        Login as Doctor
      </div>
    </div>
    {isToggled ? <DoctorLogin /> : <PatientLogin />}
    </>
  );
};

function PatientLogin() {
  return <>
   <InputBox label="Patient Username" placeholder="Patient Username" onChange={() => {}} />
  <InputBox label="Password" placeholder="Password" onChange={() => {}} />
  <button className="w-full p-2 rounded-md bg-[#ff7b54] mt-4 text-white">Login</button>
  <div className="text-center text-sm mt-2"> 
      Don't Have an Account ? <a href="/register" className="text-[#ff7b54]">Register</a>
  </div>
  </>
}

function DoctorLogin() {
  return <>
        <InputBox label="Doctor Username" placeholder="Doctor Username" onChange={() => {}} />
        <InputBox label="Password" placeholder="Password" onChange={() => {}} />
        <button className="w-full p-2 rounded-md bg-[#ff7b54] mt-4 text-white">Login</button>
        <div className="text-center text-sm mt-2"> 
            Don't Have an Account ? <a href="/register" className="text-[#ff7b54]">Register</a>
        </div>
  </>
}

