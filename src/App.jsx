import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
function App() {
  return (
    <div>
    <Navbar></Navbar>
       <Routes>
         <Route path="/" element={<Home></Home>} ></Route>
         <Route path="/Cart" element={<Cart></Cart>} ></Route>




       </Routes>


    </div>

  );
}

export default App;
