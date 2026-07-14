import { HashRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import ProfileAnalyzer from "./pages/ProfileAnalyzer";
import GigSEO from "./pages/GigSEO";
import ProposalGenerator from "./pages/ProposalGenerator";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/dashboard/profile-analyzer"
          element={<ProfileAnalyzer />}
        />

        <Route
          path="/dashboard/gig-seo"
          element={<GigSEO />}
        />

        <Route
          path="/dashboard/proposal-generator"
          element={<ProposalGenerator />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;