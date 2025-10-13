import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/productCard";
import Header from "./components/header";
import Test from "./components/test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import AdminPage from "./pages/adminPage";
import RegisterPage from "./pages/registerPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* Browser router from npm install react-router-dom */}
      <BrowserRouter> 
        <div className="w-full h-screen bg-primary text-secondary">  

            <Routes path="/">

              {/* <Route path="/" element={<h1>Home Page</h1>}/>  
              <Route path="/login" element={<h1>Login</h1>}/>
              <Route path="/register" element={<h1>Register</h1>}/> 
              <Route path="/admin" element={<h1>Admin</h1>}/> */}

              <Route path="/" element={<HomePage/>}/> 
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="/admin" element={<AdminPage/>}/> 

            </Routes>


        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
