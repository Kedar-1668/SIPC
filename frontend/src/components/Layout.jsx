import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import "./Layout.css"
import Loader from '../components/Loader';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <Loader /> : <Outlet />;
};

export default Layout;
