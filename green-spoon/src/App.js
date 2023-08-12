import "./App.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar";
import ComHome from "./components/ComHome";
function App() {
  return (
    <>
   
        <Router>
          <Nav />
         <ComHome/>
          <div className="container">
            <Routes>
              {/* <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} /> */}
            </Routes>
          </div>
        </Router>
    
    </>
  );
}

export default App;
