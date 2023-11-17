import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="content"></div>
      <Footer />
    </>
  );
}

export default App;
