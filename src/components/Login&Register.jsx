import Alert from "@mui/material/Alert";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginandRegister() {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const notify = () => {
    toast("Success", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // Login
  const handleSubmit = (e) => {
    e.preventDefault();
    const admin = JSON.parse(localStorage.getItem("newAdmin")); // admin bilgisi localStorage’da yoksa hata olur
    if (admin && username === admin.username && password === admin.password) {
      navigate("/login");
    } else {
      setUsername("");
      setPassword("");
      setError(true);
    }
  };

  // Register
  const handleRegister = (e) => {
    e.preventDefault();
    const newCustomer = { name, surname, email, phone };
    const existing = JSON.parse(localStorage.getItem("customers")) || [];
    const updated = [...existing, newCustomer];
    localStorage.setItem("customers", JSON.stringify(updated));

    notify();

    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)",
      }}
      className="flex flex-col min-w-screen w-screen min-h-screen justify-center items-center px-4"
    >
      <div className="flex flex-col w-full max-w-screen-lg h-full justify-start items-center px-4 mx-auto">
        <h1 className="text-cyan-400 mt-20 text-5xl font-extrabold mb-16 drop-shadow-[0_0_10px_rgba(0,212,255,0.7)]">
          ADMIN DASHBOARD
        </h1>

        {login ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-md w-full bg-gray-900 border border-cyan-600 rounded-3xl p-12 gap-8 shadow-[0_0_25px_rgba(0,212,255,0.6)]"
          >
            <div className="flex flex-col">
              <label className="mb-2 text-cyan-300 font-semibold">
                Username
              </label>
              <input
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter the username"
                className="px-4 py-3 rounded-lg bg-gray-800 text-cyan-100 placeholder-cyan-600 border-2 border-cyan-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-cyan-300 font-semibold">
                Password:
              </label>
              <input
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter the password"
                className="px-4 py-3 rounded-lg bg-gray-800 text-cyan-100 placeholder-cyan-600 border-2 border-cyan-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
              />
            </div>

            {error && (
              <Alert severity="error">Username or password is incorrect</Alert>
            )}

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-3 rounded-2xl shadow-md shadow-cyan-400/50 transition cursor-pointer"
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setLogin(false)}
              className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-3 rounded-2xl shadow-md shadow-cyan-400/50 transition cursor-pointer"
            >
              Register
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleRegister}
            className="bg-gray-900 p-10 flex flex-col gap-6 shadow-[0_0_15px_cyan] rounded-3xl w-full max-w-md mx-auto"
          >
            <div className="flex flex-col">
              <label className="text-cyan-500 mb-2 font-semibold">İsim</label>
              <input
                value={name}
                type="text"
                required
                lang="en"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter the name"
                className="border border-cyan-700 placeholder-cyan-500 p-3 rounded-2xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-cyan-500 mb-2 font-semibold">
                Surname
              </label>
              <input
                value={surname}
                type="text"
                required
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Enter the surname"
                className="border border-cyan-700 placeholder-cyan-500 p-3 rounded-2xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-cyan-500 mb-2 font-semibold">E-mail</label>
              <input
                value={email}
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter the E-mail"
                className="border border-cyan-700 placeholder-cyan-500 p-3 rounded-2xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-cyan-500 mb-2 font-semibold">Phone</label>
              <input
                value={phone}
                type="tel"
                required
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="border border-cyan-700 placeholder-cyan-500 p-3 rounded-2xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300 text-white font-semibold py-3 rounded-2xl cursor-pointer"
            >
              Register
            </button>

            <button
              type="button"
              onClick={() => setLogin(true)}
              className="mt-2 text-cyan-400 hover:text-cyan-600 cursor-pointer"
            >
              Back
            </button>
            <ToastContainer />
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginandRegister;
