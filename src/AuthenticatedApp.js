import { Routes, Route } from "react-router-dom";
import SideNavBarForm from "./components/NavBars/SideNavBar.js";
import FindThatJob from "./components/ProfessionalViews/FindThatJob.js";
import Following from "./components/ProfessionalViews/Following";
import MyProfile from "./components/ProfessionalViews/MyProfile";
import YourApplication from "./components/ProfessionalViews/YourApplication";

export function AuthenticateApp() {
  function Recruiter() {
    return <h1>Recruiter</h1>;
  }

  if (sessionStorage.getItem("rol") === "professional") {
    return (
      <div>
        <SideNavBarForm />
        <Routes>
          <Route index element={<FindThatJob />} />
          <Route path="/YourApplication" element={<YourApplication />} />
          <Route path="/Following" element={<Following />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <Recruiter />
      </div>
    );
  }
}
