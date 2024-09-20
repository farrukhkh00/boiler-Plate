import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar';
import Link1 from './NestedLinksDash/Link1';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Config/firebase';

const Dashboard = () => {
  let [data,setData] = useState([])
  let [arr,SetArr] = useState([])
  useEffect(()=>{
    getData()
      },[])
  const getData = async () =>{
    try{
      const data = await getDocs(collection(db,"users"))
      data.forEach((e)=>{
        SetArr([{...e.data(),id: e.id}])
      });
      
      console.log(arr)
      setData(arr)
    } catch(err){
      console.log(err)
    }
  }
  let userData = arr.filter((e,i)=>{
    return e.id === localStorage.getItem('userId')
  })

  console.log(arr)
  return (
<>

      {/* Navbar */}
      <Navbar />
      <br />
      <br />
      
    {/* {
      data.map((e,i)=>{
        return(
          <div className='mt-44' key={i}>
            <h1>{e.id}</h1>
          </div>
        )
      })
    } */}

    {
     userData.map((e,i)=>{
      return(
        <div className='mt-44'>
          <h1>Name : {e.name}</h1>
        </div>
      )
     })
    }
      
   <Sidebar/>
 <Outlet/>
</>
  );
};

export default Dashboard;
