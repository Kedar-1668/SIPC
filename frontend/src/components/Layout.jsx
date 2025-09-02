import React from 'react';
import { Outlet } from 'react-router-dom';
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      {/* You can put your Navbar here */}
      <Outlet />
      {/* And Footer here */}
    </div>
  );
};

export default Layout;
