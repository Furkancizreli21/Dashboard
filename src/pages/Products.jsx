import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  useEffect(() => {
    const extractData = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(extractData);
  }, []);

  const handleDelete = (id) => {
    const updated = products.filter((product) => product.productId !== id);
    localStorage.setItem("products", JSON.stringify(updated));
    setProducts(updated);
  };

  const handleEditClick = (product) => {
    setEditingId(product.productId);
    setEditFormData({
      productDesc: product.productDesc,
      productCount: product.productCount,
      productCategory: product.productCategory,
      productPrice: product.productPrice,
    });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const updatedProducts = products.map((p) =>
      p.productId === editingId ? { ...p, ...editFormData } : p
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    setEditingId(null);
    setEditFormData({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditFormData({});
  };

  return (
    <div className="flex bg-gray-800 text-white w-full">
      <div className="flex flex-col w-full">
        <main className="flex flex-col flex-grow px-10 py-8">
          <h1 className="text-cyan-400 text-5xl font-extrabold mb-10 drop-shadow-[0_0_10px_rgba(0,212,255,0.7)] text-center">
            Products
          </h1>
          <div className="overflow-x-auto rounded-lg border border-cyan-600">
            <table className="min-w-full text-left border-collapse">
              <thead className="bg-cyan-700 text-white">
                <tr>
                  <th className="px-6 py-3">Product Name</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3">Piece</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3 text-center">Settings</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const isEditing = editingId === product.productId;

                  return (
                    <tr
                      key={product.productId}
                      className="even:bg-gray-900 odd:bg-gray-800 hover:bg-cyan-900"
                    >
                      <td className="px-6 py-4 flex items-center gap-4">
                        <img
                          src={product.productImg}
                          className="w-20 h-20  object-contain"
                        />
                        <span>{product.productName}</span>
                      </td>
                      <td className="px-6 py-4">
                        {isEditing ? (
                          <input
                            type="text"
                            name="productDesc"
                            value={editFormData.productDesc || ""}
                            onChange={handleEditFormChange}
                            className="bg-gray-700 p-2 rounded"
                          />
                        ) : (
                          product.productDesc
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {isEditing ? (
                          <input
                            type="number"
                            name="productCount"
                            value={editFormData.productCount || ""}
                            onChange={handleEditFormChange}
                            className="bg-gray-700 p-2 rounded"
                          />
                        ) : (
                          product.productCount
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {isEditing ? (
                          <select
                            value={editFormData.productCategory}
                            onChange={handleEditFormChange}
                            className="bg-gray-700 p-2 rounded "
                            name="productCategory"
                          >
                            <option>Shoes</option>
                            <option>Sweat</option>
                            <option>Tshirt</option>
                          </select>
                        ) : (
                          product.productCategory
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {isEditing ? (
                          <input
                            type="text"
                            name="productPrice"
                            value={editFormData.productPrice || ""}
                            onChange={handleEditFormChange}
                            className="bg-gray-700 p-2 rounded"
                          />
                        ) : (
                          `${product.productPrice}$`
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2 justify-center items-center">
                          {isEditing ? (
                            <>
                              <button
                                onClick={handleSave}
                                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded cursor-pointer w-[80px] text-center"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleCancel}
                                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded cursor-pointer w-[80px] text-center"
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => handleEditClick(product)}
                                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded cursor-pointer w-[80px] text-center"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(product.productId)}
                                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded cursor-pointer w-[80px] text-center"
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-full flex justify-end mt-6">
            <Link
              to="/login"
              className="bg-cyan-300 text-black rounded-md hover:bg-cyan-400 transition px-4 py-2"
            >
              Back
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;
