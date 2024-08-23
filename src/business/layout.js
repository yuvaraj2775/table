import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "./Nav";
export default function layout() {
  return (
    <div className="flex overflow-hidden">
      <div className=" ">
        <Nav />
      </div>

      <div className="flex-1 h-screen max-w-6xl overflow-y-scroll overscroll-x-none  p-8 ">
        <Outlet />
      </div>
    </div>
  );
}
