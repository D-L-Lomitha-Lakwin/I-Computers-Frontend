import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/productCard";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="border w-[600px] h-[600px] bg-gray-400 relative">

        <div className="w-[500px] h-[500px] bg-yellow-100 flex flex-col items-center justify-center">

          <div className="w-[100px] h-[100px] bg-blue-600"></div>

          <div className="w-[100px] h-[100px] bg-red-600 fixed left-[550px] top-[550px]"></div>

          <div className="w-[100px] h-[100px] bg-green-600"></div>

          <div className="w-[100px] h-[100px] absolute right-[80px] bottom-[80px] bg-pink-600"></div>

        </div>
        
      </div>
    </>
  );
}

export default App;
