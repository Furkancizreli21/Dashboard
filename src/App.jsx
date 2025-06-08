import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LoginAndRegisterPage from "./pages/LoginAndRegisterPage";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Customers from "./pages/Customers";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { useEffect } from "react";
import MailBox from "./pages/MailBox";

function App() {
  const location = useLocation();

  // Sadece giriş sayfasında Sidebar ve Header gösterme
  const isLoginPage =
    location.pathname === "/" || location.pathname === "/login";

  useEffect(() => {
    const newAdmin = { username: "yusuf", password: "123" };
    if (!localStorage.getItem("admin")) {
      localStorage.setItem("admin", JSON.stringify(newAdmin));
    } else {
      localStorage.setItem("newAdmin", JSON.stringify(newAdmin));
    }
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      {!isLoginPage && <SideBar />}
      <div className="flex flex-col flex-1 overflow-hidden">
        {!isLoginPage && <Header />}
        <main className="flex-1 overflow-y-auto  bg-gray-800">
          <Routes>
            <Route path="/" element={<LoginAndRegisterPage />} />
            <Route path="/login" element={<Home />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/email" element={<MailBox />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
