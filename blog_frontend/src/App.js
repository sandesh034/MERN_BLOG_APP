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
import Blogs from "./Components/Blogs";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><HomeSwiper /><CategorySlider /><Blogs/><Footer/></>}></Route>
        <Route path="/registerUser" element={<RegisterUser />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/addblog" element={<AddBlog />}></Route>
        <Route path="/readBlog" element={<ReadBlog/>} ></Route>
        <Route path="*" element={<p>Error 404 NOT Found</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
