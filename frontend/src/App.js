import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Layout from './components/Layout';
import JoinUs from './pages/JoinUs';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader only on initial load
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Loader only for Home on first load */}
          <Route
            path="/"
            element={loading ? <Loader /> : <Home />}
          />

          {/* Other pages load instantly */}
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/join" element={<JoinUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
