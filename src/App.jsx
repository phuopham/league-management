import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import LayoutAdmin from "./layouts/LayoutAdmin";
// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import Error404 from "./pages/Error404";
import TeamManagement from "./pages/admin/TeamsManagement";
import PlayerManagement from "./pages/admin/PlayerManagement";
import Match from "./pages/admin/Match";
import Live from "./pages/admin/Live";
import MatchDetail from "./pages/admin/MatchDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="team" element={<TeamManagement />} />
          <Route path="players" element={<PlayerManagement />} />
          <Route path="profile" element={<Profile />} />
          <Route path="match" element={<Match />} />
          <Route path="live" element={<Live />} />
          <Route path="matchdetail" element={<MatchDetail />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
