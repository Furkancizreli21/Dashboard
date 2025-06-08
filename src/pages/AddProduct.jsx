import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productCount, setProductCount] = useState("");
  const [productImg, setProductImg] = useState(null);
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productImg) {
      toast.error("Please choose a picture");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const newProduct = {
        productId: Date.now(),
        productName: productName.trim(),
        productDesc: productDesc.trim(),
        productCategory,
        productCount: Number(productCount),
        productImg: reader.result,
        productPrice: Number(productPrice),
      };

      const existingProducts =
        JSON.parse(localStorage.getItem("products")) || [];
      existingProducts.push(newProduct);
      localStorage.setItem("products", JSON.stringify(existingProducts));

      setProductName("");
      setProductDesc("");
      setProductCategory("");
      setProductCount("");
      setProductImg(null);
      setProductPrice("");

      e.target.reset();

      toast.success("The product has been successfully registered!", {
        position: "top-center",
      });
    };

    reader.readAsDataURL(productImg);
  };

  return (
    <div className="flex h-screen w-full bg-gray-800">
      <div className="w-full h-screen flex flex-col">
        <div className="flex justify-center items-center h-screen p-6 flex-col">
          <h1 className="text-cyan-400 text-5xl font-extrabold mb-10 drop-shadow-[0_0_10px_rgba(0,212,255,0.7)] text-center">
            Add Product
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 text-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 border border-cyan-500"
          >
            {/* Left Side */}
            <div className="flex flex-col gap-6 ">
              <div>
                <label className="block mb-2 text-cyan-400 font-semibold">
                  Product Name
                </label>
                <input
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                  type="text"
                  placeholder="Enter the product name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-cyan-700 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-cyan-400 font-semibold">
                  Product Description
                </label>
                <textarea
                  value={productDesc}
                  onChange={(e) => setProductDesc(e.target.value)}
                  rows={5}
                  placeholder="Enter the product description"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-cyan-700 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-cyan-400 font-semibold">
                  Product Picture
                </label>
                <input
                  onChange={(e) => setProductImg(e.target.files[0])}
                  type="file"
                  accept="image/*"
                  className="w-full text-white file:bg-cyan-600 file:text-white file:rounded-lg file:px-4 file:py-2 file:border-0 file:cursor-pointer"
                  required
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-6">
              <div>
                <label className="block mb-2 text-cyan-400 font-semibold">
                  Category
                </label>
                <select
                  onChange={(e) => setProductCategory(e.target.value)}
                  value={productCategory}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Select Category</option>
                  <option value="Tshirt">T-shirt</option>
                  <option value="Sweat">Sweat</option>
                  <option value="Shoes">Shoes</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-cyan-400 font-semibold">
                  Piece
                </label>
                <input
                  value={productCount}
                  onChange={(e) => setProductCount(e.target.value)}
                  type="number"
                  min={1}
                  placeholder="Enter the piece"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-cyan-700 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-cyan-400 font-semibold">
                  Price
                </label>
                <input
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  type="number"
                  min={1}
                  placeholder="Fiyat Giriniz..."
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-cyan-700 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="mt-auto">
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-2xl transition duration-300 cursor-pointer"
                >
                  Add Product
                </button>

                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  transition={Bounce}
                />
              </div>
            </div>
          </form>

          <div className="w-full max-w-3xl flex justify-end mt-6">
            <Link
              to="/login"
              className="bg-cyan-300 text-black rounded-md hover:bg-cyan-400 transition px-4 py-2"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
