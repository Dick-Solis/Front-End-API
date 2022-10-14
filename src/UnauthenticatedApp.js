import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavBarForm from "./components/NavBars/NavBar";
import Signup1 from "./components/SignupProf/Signup1";
import Signup2 from "./components/SignupProf/Signup2";
import Signup3 from "./components/SignupProf/Signup3";
import SignupRec1 from "./components/SignupRec/SignupRec1";
import SignupRec2 from "./components/SignupRec/SignupRec2";


export function UnaunthenticatedApp(){
  return(
  <div>
    <NavBarForm/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup1" element={<Signup1 />} />
      <Route path="/signup2" element={<Signup2 />} />
      <Route path="/signup3" element={<Signup3 />} />
      <Route path="/signupRec1" element={<SignupRec1 />} />
      <Route path="/signupRec2" element={<SignupRec2 />} />
    </Routes>
  </div>
    
  )
}

