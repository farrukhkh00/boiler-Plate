import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'

const Sidebar = () => {
   let [toggleOpen,setToggleOpen]  = useState(false)

   const toggleSidebar = () =>{
      setToggleOpen(!toggleOpen)
   }
  
  
   
  return (  
     <>
     
     <button onClick={toggleSidebar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class={`inline-flex fixed mt-60 items-center p-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}>
  
  <FaArrowRight className='text-xl absolute mb-40' />
</button>

<aside id="default-sidebar" class={`${toggleOpen? '-translate-x-full' : ""} fixed top-0 left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0`} aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-[#1F2937] dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <Link to="link1" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <span class="flex-1 ms-3 whitespace-nowrap">Link 1</span>
            </Link>
         </li>

         <li>
            <Link to="link2" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <span class="flex-1 ms-3 whitespace-nowrap">Link 2</span>
            </Link>
         </li>

         <li>
            <Link to="link3" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <span class="flex-1 ms-3 whitespace-nowrap">Link 3</span>
            </Link>
         </li>

         <li>
            <Link to="link4" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <span class="flex-1 ms-3 whitespace-nowrap">Link 4</span>
            </Link>
         </li>
       
         <li>
            <Link to="link5" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <span class="flex-1 ms-3 whitespace-nowrap">Link 5 </span>
            </Link>
         </li>

         
        
         
       
      </ul>
     <div className='flex justify-end'>
     <button onClick={toggleSidebar}><FaArrowLeft className=' text-white'/></button>
     </div>
   </div>
</aside>





    
     
     </>


  )
}

export default Sidebar
