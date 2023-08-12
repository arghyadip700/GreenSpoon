import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar";
import ComHome from "./components/ComHome";
import Rest_home from "./components/Rest_home";

function App() {
  return (
    <>

      <Router>
        <Nav />
        <ComHome />
        <div className="container">
          <Routes>
            {/* <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} /> */}
            <Route exact path="/" element={<ComHome />} />
            <Route exact path="/res_home" element={<Rest_home />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
