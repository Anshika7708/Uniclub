import React from "react";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
      <Outlet />
    </div>
  );
}

export default Layout;
