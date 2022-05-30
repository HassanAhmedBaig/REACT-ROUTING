import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup ";


export default function AppRouter() {
  return (
 <Router>
     <Routes>
         <Route path="/Dashboard" element={<Dashboard />}/>
         <Route path="/Login" element={<Login />}/>
         <Route path="/Signup" element={<Signup />}/>
     </Routes>
 </Router>
  );
}