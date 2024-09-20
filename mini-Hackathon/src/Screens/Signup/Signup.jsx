import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword, signInWithPopup}  from "firebase/auth";
import { auth, db, provider } from '../../Config/firebase';
import { collection, addDoc } from "firebase/firestore"

const Signup = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [fname, setFname] = React.useState("");

    const [data,setData] = useState();    

    // Auth signup
   const handleSignup = async (e)=>{
    e.preventDefault()
       createUserWithEmailAndPassword(auth, email, password)
         .then((res) => {
           alert("Signup success")
         })
         .catch((error) => {
           alert(error.message.slice(16))
           
         });

        //  Database
         try {
          const docRef = await addDoc(collection(db, "users"), {
            name : fname,
            email: email,
            password : password
          }
        );  
          localStorage.setItem('userId',docRef.id)

        } catch (e) {
          console.error("Error adding document: ", e);
        }


   }
   const Google = () =>{

    signInWithPopup(auth, provider)
    .then((result) => {
      alert("login succesfully")
      localStorage.setItem('loginuser',provider)
    }).catch((error) => {
      alert(error.message)
    });
 
  }
   // For Navigation
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
            onChange={(e)=>setFname(e.target.value)}
            id="name"
            name="name"
            required
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
            id="email"
            name="email"
            required
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
            required
            id="password"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input
            required
            id="c_password"
            name="c_password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Sign Up
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
          Sign Up with Google
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/" className="text-indigo-500 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
