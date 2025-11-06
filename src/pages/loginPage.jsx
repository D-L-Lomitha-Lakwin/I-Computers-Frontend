// import backgroundImage from '../assets/bg.jpg' // .. for exit from current folder, . for stay in current folder

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import toast from "react-hot-toast";

export default function LoginPage() {
  
  // useState Hook.......................
  // useState for form data
  // To real time collect data from input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // useNavigate Hook........................
  const navigate = useNavigate(); // For Smooth page navigation





  async function login() { 
    // Latest updated email, password store in "email, password" variable
    console.log("Email: ", email); // To check the email value in the console
    console.log("Password: ", password); // To check the password value in the console

    try {
        // import.meta.env.VITE_BACKEND_URL, this is for import backend URL's first section from .env file
      const res = await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login", { 
        // Send data to the backend with location
        email: email,
        password: password, 
      });

      console.log(res); // To check the response from the backend in the console
      
      localStorage.setItem("token", res.data.token) // Store the token in the local storage

      // const token = localStorage.getItem("token"); // Get the token from the local storage


      if(res.data.role == "admin"){
        // window.location.href = "/admin";
        navigate("/admin"); // navigate from useNavigate Hook
      }
      else{
        // window.location.href = "/"; 
        navigate("/");
      }
      
    
      toast.success('Login Successful, Welcome Back') // Success alert by toaster library


    } 
    
    catch (err) {

      toast.error('Login Failed, Please Try Again') // Error alert by toaster library

        console.log("Error during login")  
        console.log(err); // To check the error in the console
    }
  }

  return (
    <div className="w-full h-screen bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat flex">
      {/* <img src={backgroundImage} alt="background image" className="border-2 w-96 h-96"/> */}

      <div className="w-[50%] h-full flex flex-col justify-center items-center p-[50px]">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[200px] h-[200px] mb-[20px] object-cover"
        />
        <h1 className="text-[50px] text-white text-shadow-accent text-shadow-2xs font-bold text-center">
          Sri Lanka’s Gateway to Smart Computing
        </h1>
        <p className="text-[30px] text-white italic">
          Explore, upgrade, and connect with confidence.
        </p>
      </div>
      {/* Transparent Div */}
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-3xl flex flex-col justify-center items-center p-[30px]">
          <h1 className="text-[40px] font-bold mb-[20px] text-white text-shadow-white">
            Login
          </h1>
          <input
            onChange={(e) => { 
              setEmail(e.target.value); // Real time update the email input field value
            }}
            type="email"
            placeholder="Your Email"
            className="w-full h-[50px] mb-[20px] rounded-lg border-2 border-accent p-[10px] text-[20px]  text-white focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Your Password"
            className="w-full h-[50px] rounded-lg border-2 border-accent p-[10px] text-[20px] text-white focus:outline-none focus:ring-2 focus:ring-white"
          />

          <p className="text-white not-italic mt-[20px] mb-[20px] w-full text-right">
            Forget your Password?{" "}
            <Link to="/register" className="text-accent italic font-bold">
              Reset it here
            </Link>
          </p>

          <button 
            onClick={login}
            className="w-full h-[50px] bg-accent text-white text-[20px] font-bold rounded-lg hover:bg-transparent hover:text-accent transition duration-300 border-[2px] border-accent "
          >
            Login
          </button>
          <p className="text-white not-italic mt-[20px]">
            Don't have an account?{" "}
            <Link to="/register" className="text-accent italic font-bold">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
