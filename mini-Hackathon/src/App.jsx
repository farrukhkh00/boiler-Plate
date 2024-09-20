import React from 'react'
import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Screens/Dashboard/Dashboard';
import Link1 from './Screens/Dashboard/NestedLinksDash/Link1';
import Link2 from './Screens/Dashboard/NestedLinksDash/Link2';
import Link3 from './Screens/Dashboard/NestedLinksDash/Link3';
import Link4 from './Screens/Dashboard/NestedLinksDash/Link4';
import Link5 from './Screens/Dashboard/NestedLinksDash/Link5';
import TableComp from './Components/TableComp/TableComp';
function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path='/dashboard/' element={<Dashboard/>}>
      <Route path='link1' element={<Link1/>}/>
      <Route path='link2' element={<Link2/>}/>
      <Route path='link3' element={<Link3/>}/>
      <Route path='link4' element={<Link4/>}/>
      <Route path='link5' element={<Link5/>}/>
      </Route>
    </Routes>
    
    
  
  )
}

export default App;
