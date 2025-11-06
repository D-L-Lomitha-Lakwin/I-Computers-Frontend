import { Link, Route, Routes } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { MdOutlineRateReview } from "react-icons/md";
import AdminProductsPage from "./admin/adminProductsPage";
import AdminAddProductsPage from "./admin/adminAddProductPage";



export default function AdminPage() {
  return (
    <div className="w-full h-full max-h-full flex bg-accent">
      <div className="w-[300px] bg-accent">
        <div className="w-full h-[100px] text-primary flex items-center">
          <img src="/logo.png" alt="Logo" className="h-full" />

          <h1 className="text-2xl">Admin</h1>
        </div>

        <div className="w-full h-[400px] text-white text-2xl flex flex-col pl-[20px] pt-[20px]">
          <Link to="/admin" className="w-full h-[50px] flex items-center gap-[10px]"><LuClipboardList />Orders</Link>
          <Link to="/admin/products" className="w-full h-[50px] flex items-center gap-[10px]"><LuBoxes />Products</Link>
          <Link to="/admin/users" className="w-full h-[50px] flex items-center gap-[10px]"><FiUsers />Users</Link>
          <Link to="/admin/reviews" className="w-full h-[50px] flex items-center gap-[10px]"><MdOutlineRateReview />Reviews</Link>
        </div>
      </div>

      <div className="w-[calc(100%-300px)] h-full max-h-full bg-primary border-[10px] rounded-3xl overflow-y-scroll border-accent">
        {/* max-h-full = max height full */}
        <Routes>
          <Route path="/" element={<h1>Orders</h1>}></Route>
          <Route path="/products" element={<AdminProductsPage/>}></Route>
          <Route path="/add-product" element={<AdminAddProductsPage/>}></Route>
          <Route path="/users" element={<h1>Users</h1>}></Route>
          <Route path="/reviews" element={<h1>Reviews</h1>}></Route> 
        </Routes>
      </div>
    </div>
  );
}
