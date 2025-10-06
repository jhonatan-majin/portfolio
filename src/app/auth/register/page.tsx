"use client"
import React from "react";
import axios from "axios";

const Register = () => {
 const [user, setUser] = React.useState({
  email: "",
  password: "",
  name: "",
 })

 async function onSubmit(e) {
  e.preventDefault();

  try {
   const response = await axios.post("/api/auth/register", user);
   window.location.replace("/auth/login")
   alert("Sign up successful")
   console.log("Login success", response.data);
  } catch (error) {
   console.log("Login failed", error.message);
  }
  return;
 }

 return (
  <>
   <div className="grid md:grid-cols-1  mx-12 md:my-3 py-12 gap-2 relative">
    <div><h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Register</h2></div>
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
    <form className="flex flex-col items-center" onSubmit={onSubmit}>
     <div className="mb-6">
      <label
       htmlFor="email"
       className="text-white block mb-2 text-sm font-medium"
      >
       Your name
      </label>
      <input
       name="name"
       type="name"
       id="name"
       required
       className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
       placeholder="jacob"
       value={user.name}
       onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
     </div>
     <div className="mb-6">
      <label
       htmlFor="email"
       className="text-white block mb-2 text-sm font-medium"
      >
       Your email
      </label>
      <input
       name="email"
       type="email"
       id="email"
       required
       className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
       placeholder="jacob@google.com"
       value={user.email}
       onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
     </div>
     <div className="mb-6">
      <label
       htmlFor="email"
       className="text-white block mb-2 text-sm font-medium"
      >
       Your password
      </label>
      <input
       name="password"
       type="password"
       id="password"
       required
       className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
       placeholder="*******"
       value={user.password}
       onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
     </div>
     <button
      type="submit"
      className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg "
     >
      Register Now
     </button>
    </form>
   </div>
  </>
 );
};

export default Register;
