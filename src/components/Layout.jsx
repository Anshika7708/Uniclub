import React from "react";
import { Outlet } from "react-router";
import { Navbar } from ".";

// function Layout() {
//   return (
//     <div className="flex flex-col h-screen">
      
//       <main className="flex-1 justify-center items-center">
//         <Outlet />
//       </main>

//     </div>
//   );
// }

// export default Layout;

function Layout() {
  return (
    <div className="flex-col justify-center items-center min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;