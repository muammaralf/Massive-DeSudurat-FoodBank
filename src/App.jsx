import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dashboard from "./pages/Dashboard";
import Informasi from "./pages/Informasi";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/informasi" element={<Informasi />}></Route>
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
