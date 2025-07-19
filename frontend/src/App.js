import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Layout from './components/Layout';
import JoinUs from './pages/JoinUs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/members' element={<Members />} />
            <Route path='/join' element={<JoinUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
