import { BrowserRouter, Routes, Route } from "react-router-dom"


import Navbar from './Components/Navbar';
import CategorySlider from './Components/CategorySlider';
import RegisterUser from './Components/RegisterUser';
import Login from './Components/Login';
import AddBlog from './Components/AddBlog';
import HomeSwiper from "./Components/HomeSwiper";
import BlogCard from "./Components/BlogCard";
import Footer from "./Components/Footer";
import ReadBlog from "./Components/ReadBlog";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><HomeSwiper /><CategorySlider /><BlogCard/><Footer/></>}></Route>
        <Route path="/registerUser" element={<RegisterUser />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/addblog" element={<AddBlog />}></Route>
        <Route path="/readBlog" element={<ReadBlog/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
