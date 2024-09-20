import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword, signInWithPopup}  from "firebase/auth";
import { auth, provider } from '../../Config/firebase';


const Login = () => {
  const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  const handleLogin = (e) => {
    e.preventDefault()

    // Signin Auth
    signInWithEmailAndPassword(auth, email, password)
  .then((res) => {
    alert("login succesfully")
    localStorage.setItem('loginuser',email)
    navigate('/dashboard');
  })
  .catch((error) => {
    alert(error.message)
  });
  }

  // Google auth
const Google = () =>{

  signInWithPopup(auth, provider)
  .then((result) => {
    alert("login succesfully")
    localStorage.setItem('loginuser',provider)
    navigate('/dashboard');
  }).catch((error) => {
    alert(error.message)
  });
}
const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
             id="email"
            name="email"
            onClick={(e)=>setEmail(e.target.value)}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
             id="password"
            name="password"
            onClick={(e)=>setPassword(e.target.value)}
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-between mt-6">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-400">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
        onClick={Google}
          type="button"
          className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Login with Google
        </button>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-indigo-500 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
