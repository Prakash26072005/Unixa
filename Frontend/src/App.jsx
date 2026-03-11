import Navbar from "./components/nav/Nav.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat.jsx";

import Refralls from "./pages/Referrals.jsx";
import Alumni from "./pages/Alumni.jsx";
import Jobs from "./pages/Jobs.jsx";
import Notifications from "./pages/Notifications.jsx";
import OpenSorcePro from "./pages/OpenSorcePro.jsx";

function App() {
  return (
     <BrowserRouter>
     <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/referrals" element={<Refralls />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/chat" element={<Chat />} />
      
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/op-src-pro" element={<OpenSorcePro/>} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
     </BrowserRouter>
  )
}

export default App;
