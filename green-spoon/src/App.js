import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./components/Navbar";
import ComHome from "./components/ComHome";
import Rest_home from "./components/Rest_home";
import Ngo_home from "./components/Ngo_home";
import Next_res from "./components/Next_res";
import UserState from "./components/context/user/UserState";
import About from "./components/About";
function App() {
  return (
    <>
    <UserState>
      <Router>
        <Nav />
      
        <div>
          <Routes>
            {/* <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />  */}
            <Route exact path="/" element={<ComHome />} />
            <Route exact path="/rest_home" element={<Rest_home />} />
            <Route exact path="/ngo_home" element={<Ngo_home />} />
             <Route exact path="/next_res" element={<Next_res />} /> 
             <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      </UserState>

    </>
  );
}

export default App;
