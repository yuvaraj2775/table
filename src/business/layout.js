import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "./Nav";
export default function layout() {

  return (
    <div className="flex">

    <div className=" ">
    <Nav/>
    
    </div>
  
 
    <div className="flex-1 h-screen  overflow-y-scroll p-8 ">
      <Outlet />
    </div>
  </div>
  );
}
