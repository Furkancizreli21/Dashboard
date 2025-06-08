import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const customers = localStorage.getItem("customers");
    if (customers) {
      setCustomers(JSON.parse(customers));
    }
  }, []);

  return (
    <div className="flex bg-gray-800 text-white w-full min-h-screen">
      <div className="flex flex-col w-full">
        <main className="flex flex-col flex-grow px-10 py-8 items-center">
          <h1 className="text-cyan-400 text-5xl font-extrabold mb-10 drop-shadow-[0_0_10px_rgba(0,212,255,0.7)]">
            Customers
          </h1>

          <div className="w-full max-w-5xl overflow-x-auto rounded-lg border border-cyan-600 shadow-lg">
            <table className="min-w-full text-left border-collapse">
              <thead className="bg-cyan-700 text-white">
                <tr>
                  <th className="px-6 py-3">Customer Name</th>
                  <th className="px-6 py-3">Customer Surname</th>
                  <th className="px-6 py-3">Phone Number</th>
                  <th className="px-6 py-3">E-Mail</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr
                    key={index}
                    className="even:bg-gray-900 odd:bg-gray-800 hover:bg-cyan-900 transition-colors"
                  >
                    <td className="px-6 py-4">{customer.name}</td>
                    <td className="px-6 py-4">{customer.surname}</td>
                    <td className="px-6 py-4">{customer.phone}</td>
                    <td className="px-6 py-4">{customer.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full max-w-5xl flex justify-end mt-6">
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

export default Customers;
